import { Label } from '@components/ui/Label';
import { cn } from '@lib/utils';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
import type { JSX } from 'react';
import * as React from 'react';
import {
    Controller,
    type ControllerProps,
    type FieldPath,
    type FieldValues,
    FormProvider,
    useFormContext,
    useFormState,
} from 'react-hook-form';

const Form = FormProvider;

type FormFieldContextValue<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
    name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue | null>(null);

const FormField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
    ...props
}: ControllerProps<TFieldValues, TName>): JSX.Element => {
    return (
        <FormFieldContext.Provider value={{ name: props.name }}>
            <Controller {...props} />
        </FormFieldContext.Provider>
    );
};

type UseFormFieldReturn = {
    id: string;
    name: string;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
    error?: { message?: string } | undefined;
    isTouched: boolean;
    isDirty: boolean;
    isValidating: boolean;
};

const useFormField = (): UseFormFieldReturn => {
    const fieldContext = React.useContext(FormFieldContext);
    if (!fieldContext) {
        throw new Error('useFormField should be used within <FormField>');
    }
    const itemContext = React.useContext(FormItemContext);
    const { getFieldState } = useFormContext();
    const formState = useFormState({ name: fieldContext.name });
    const fieldState = getFieldState(fieldContext.name, formState);

    const { id } = itemContext;

    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState,
    };
};

type FormItemContextValue = {
    id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>({ id: '' });

function FormItem({ className, ...props }: React.ComponentProps<'div'>): JSX.Element {
    const id = React.useId();

    return (
        <FormItemContext.Provider value={{ id }}>
            <div data-slot="form-item" className={cn('grid gap-2', className)} {...props} />
        </FormItemContext.Provider>
    );
}

function FormLabel({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>): JSX.Element {
    const { error, formItemId } = useFormField();

    return (
        <Label
            data-slot="form-label"
            data-error={!!error}
            className={cn('data-[error=true]:text-destructive', className)}
            htmlFor={formItemId}
            {...props}
        />
    );
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>): JSX.Element {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

    return (
        <Slot
            data-slot="form-control"
            id={formItemId}
            aria-describedby={error ? `${formDescriptionId} ${formMessageId}` : `${formDescriptionId}`}
            aria-invalid={!!error}
            {...props}
        />
    );
}

function FormDescription({ className, ...props }: React.ComponentProps<'p'>): JSX.Element {
    const { formDescriptionId } = useFormField();

    return (
        <p
            data-slot="form-description"
            id={formDescriptionId}
            className={cn('text-muted-foreground text-sm', className)}
            {...props}
        />
    );
}

function FormMessage({ className, ...props }: React.ComponentProps<'p'>): JSX.Element | null {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message ?? '') : props.children;

    if (!body) {
        return null;
    }

    return (
        <p data-slot="form-message" id={formMessageId} className={cn('text-destructive text-sm', className)} {...props}>
            {body}
        </p>
    );
}

export { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, useFormField };

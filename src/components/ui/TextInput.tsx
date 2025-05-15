import { FormControl, FormField, FormLabel, FormMessage } from '@components/ui/Form';
import { Input } from '@components/ui/Input';
import type { ReactElement } from 'react';
import type {
    Control,
    FieldError,
    FieldPath,
    FieldValues,
    Path,
    RegisterOptions as RHFRegisterOptions,
} from 'react-hook-form';

type TextInputProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    label: string;
    type?: string;
    placeholder?: string;
    rules?: Omit<RHFRegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    errorMessage?: string | ((error: FieldError) => string);
    className?: string;
};

export function TextInput<T extends FieldValues>({
    control,
    name,
    label,
    type = 'text',
    placeholder = '',
    rules,
    errorMessage,
    className = 'mb-6',
}: TextInputProps<T>): ReactElement {
    return (
        <FormField
            control={control}
            name={name}
            rules={rules}
            render={({ field, fieldState }) => (
                <div className={className}>
                    <FormLabel className="label">{label}</FormLabel>
                    <FormControl>
                        <Input
                            className="input"
                            type={type}
                            placeholder={placeholder}
                            aria-invalid={fieldState.error ? 'true' : 'false'}
                            {...field}
                        />
                    </FormControl>
                    {fieldState.error && (
                        <FormMessage className="text-destructive text-sm" role="alert">
                            {typeof errorMessage === 'function'
                                ? errorMessage(fieldState.error)
                                : errorMessage || fieldState.error.message}
                        </FormMessage>
                    )}
                </div>
            )}
        />
    );
}

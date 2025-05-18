import { FormControl, FormDescription, FormField, FormItem, FormMessage } from '@components/ui/Form';
import { Input } from '@components/ui/Input';
import { Label } from '@components/ui/Label';
import { JSX } from 'react';
import { FieldError, UseFormReturn } from 'react-hook-form';

import { LoginInputs } from './types/LoginForm';

type LoginFormInputProps = {
    form: UseFormReturn<LoginInputs>;
    name: keyof LoginInputs;
    label: string;
    type?: string;
    placeholder?: string;
    description?: string;
    error?: FieldError;
};

export const LoginFormInput = ({
    label,
    name,
    type = 'text',
    placeholder,
    description,
    form,
    error,
}: LoginFormInputProps): JSX.Element => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <Label>{label}</Label>
                    <FormControl>
                        <Input type={type} placeholder={placeholder} {...field} />
                    </FormControl>
                    {description && <FormDescription>{description}</FormDescription>}
                    <FormMessage>{error?.message}</FormMessage>
                </FormItem>
            )}
        />
    );
};

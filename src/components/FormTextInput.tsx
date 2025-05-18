import React, { JSX } from 'react';

import { FormInputProps } from './RegistrationForm/types/RegistrationForm';
import { FormControl, FormDescription, FormField, FormItem, FormMessage } from './ui/Form';
import { Input } from './ui/Input';
import { Label } from './ui/Label';

export const FormTextInput: React.FC<FormInputProps> = ({
    label,
    name,
    type = 'text',
    placeholder,
    description,
    form,
    error,
}): JSX.Element => {
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

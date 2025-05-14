import { FormControl, FormDescription, FormField, FormItem, FormMessage } from '@components/ui/Form';
import { Input } from '@components/ui/Input';
import { Label } from '@components/ui/Label';
import React from 'react';

import { TextInputProps } from './types/RegistrationForm';

export const FormTextInput: React.FC<TextInputProps> = ({ label, name, type = 'text', placeholder, description }) => {
    return (
        <FormField
            name={name}
            render={({ field }) => (
                <FormItem>
                    <Label>{label}</Label>
                    <FormControl>
                        <Input type={type} placeholder={placeholder} {...field} />
                    </FormControl>
                    {description && <FormDescription>{description}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

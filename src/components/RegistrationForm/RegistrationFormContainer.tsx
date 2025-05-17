import { FormControl, FormDescription, FormField, FormItem, FormMessage } from '@components/ui/Form';
import { Input } from '@components/ui/Input';
import { Label } from '@components/ui/Label';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { JSX } from 'react';
import { useForm } from 'react-hook-form';

import { RegistrationFormView } from './RegistrationFormView';
import { FormInputProps, RegistrationFormData, validationRegistrationForm } from './types/RegistrationForm';

export const RegistrationFormContainer = (): JSX.Element => {
    const form = useForm<RegistrationFormData>({
        resolver: zodResolver(validationRegistrationForm),
        defaultValues: {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            street: '',
            city: '',
            postalCode: '',
            country: '',
        },
    });

    const onSubmit = (data: RegistrationFormData): void => {
        console.log(data);
    };

    return (
        <RegistrationFormView
            form={form}
            errors={form.formState.errors}
            handleRegisterFormSubmit={(event) => void form.handleSubmit(onSubmit)(event)}
        />
    );
};

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

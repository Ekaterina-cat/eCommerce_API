import { zodResolver } from '@hookform/resolvers/zod';
import { JSX } from 'react';
import { useForm } from 'react-hook-form';

import { RegistrationFormView } from './RegistrationFormView';
import { RegistrationFormData, validationRegistrationForm } from './types/RegistrationForm';

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

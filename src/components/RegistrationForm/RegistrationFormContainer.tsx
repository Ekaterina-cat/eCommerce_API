import { zodResolver } from '@hookform/resolvers/zod';
import { FormEvent, JSX } from 'react';
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

    const handleRegisterFormSubmit = (event: FormEvent<HTMLFormElement>): void =>
        void form.handleSubmit(onSubmit)(event);

    const onSubmit = (data: RegistrationFormData): void => {
        console.log(data);
    };

    return (
        <RegistrationFormView
            form={form}
            errors={form.formState.errors}
            handleRegisterFormSubmit={handleRegisterFormSubmit}
        />
    );
};

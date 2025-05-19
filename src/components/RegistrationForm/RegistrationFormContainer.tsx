import RegisterFormView from '@components/RegistrationForm/RegistrationFormView.tsx';
import { zodResolver } from '@hookform/resolvers/zod';
import { clientService } from '@services/client/client.service.ts';
import { FormEvent, JSX } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
    email: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
    password: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
    firstName: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
    lastName: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
    dateOfBirth: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
    streetName: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
    city: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
    postalCode: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
    country: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
});

const RegisterFormContainer = (): JSX.Element => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            streetName: '',
            city: '',
            postalCode: '',
            country: '',
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>): Promise<void> => {
        const { email, password, firstName, lastName, dateOfBirth, streetName, city, postalCode, country } = values;

        const customerResult = await clientService.createCustomer({
            customerData: {
                email,
                password,
                firstName,
                lastName,
                dateOfBirth,
                addresses: [
                    {
                        streetName,
                        city,
                        postalCode,
                        country,
                    },
                ],
            },
            successCallback: (customer) => {
                console.log({ customer });
            },
            errorCallback: (errorMessage) => {
                console.log({ errorMessage });
            },
        });

        if (customerResult) {
            console.log({ customerResult });
        }

        form.reset();
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        void form.handleSubmit(onSubmit)(event);
    };

    return <RegisterFormView form={form} handleSubmit={handleSubmit} />;
};

export default RegisterFormContainer;

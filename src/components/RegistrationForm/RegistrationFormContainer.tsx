import RegistrationFormView from '@components/RegistrationForm/RegistrationFormView.tsx';
import { registrationValidationSchema } from '@components/RegistrationForm/validation/registrationValidationSchema.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { clientService } from '@services/client/client.service.ts';
import { FormEvent, JSX } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const RegistrationFormContainer = (): JSX.Element => {
    const form = useForm<z.infer<typeof registrationValidationSchema>>({
        resolver: zodResolver(registrationValidationSchema),
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

    const onSubmit = async (values: z.infer<typeof registrationValidationSchema>): Promise<void> => {
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

    return <RegistrationFormView form={form} handleSubmit={handleSubmit} />;
};

export default RegistrationFormContainer;

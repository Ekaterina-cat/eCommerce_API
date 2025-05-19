import RegistrationFormView from '@components/RegistrationForm/RegistrationFormView.tsx';
import { registrationValidationSchema } from '@components/RegistrationForm/validation/registrationValidationSchema.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { ROUTE_PATH } from '@routes/constants/routes.ts';
import { clientService } from '@services/client/client.service.ts';
import { useUserStore } from '@store/login.store.ts';
import { FormEvent, JSX } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
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
    const navigate = useNavigate();
    const updateIsLoggedIn = useUserStore((state) => state.updateIsLoggedIn);
    const updateLoggedInErrorMessage = useUserStore((state) => state.updateLoggedInErrorMessage);

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
            errorCallback: updateLoggedInErrorMessage,
        });

        if (customerResult) {
            updateIsLoggedIn(true);
            form.reset();
            await navigate(ROUTE_PATH.MAIN);
        }
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        void form.handleSubmit(onSubmit)(event);
    };

    return <RegistrationFormView form={form} handleSubmit={handleSubmit} />;
};

export default RegistrationFormContainer;

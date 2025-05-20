import RegistrationFormView from '@components/RegistrationForm/RegistrationFormView.tsx';
import { registrationValidationSchema } from '@components/RegistrationForm/validation/registrationValidationSchema.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { ROUTE_PATH } from '@routes/constants/routes.ts';
import { clientService } from '@services/client/client.service.ts';
import { useUserStore } from '@store/login.store.ts';
import { FormEvent, JSX, useState } from 'react';
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
            defaultShippingAddress: true,
        },
    });
    const navigate = useNavigate();
    const updateIsLoggedIn = useUserStore((state) => state.updateIsLoggedIn);
    const updateLoggedInErrorMessage = useUserStore((state) => state.updateLoggedInErrorMessage);
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (values: z.infer<typeof registrationValidationSchema>): Promise<void> => {
        setIsLoading(true);

        const {
            email,
            password,
            firstName,
            lastName,
            dateOfBirth,
            streetName,
            city,
            postalCode,
            country,
            defaultShippingAddress,
        } = values;

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
            errorCallback: (errorMessage) => {
                updateLoggedInErrorMessage(errorMessage);
                setIsLoading(false);
            },
        });

        if (customerResult) {
            const address = customerResult.customer.addresses?.[0];

            if (defaultShippingAddress && address?.id) {
                await clientService.setDefaultAddress({
                    customerId: customerResult.customer.id,
                    version: customerResult.customer.version,
                    addressId: address.id,
                });
            }

            updateIsLoggedIn(true);
            form.reset();
            await navigate(ROUTE_PATH.MAIN);
        }

        setIsLoading(false);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        void form.handleSubmit(onSubmit)(event);
    };

    return <RegistrationFormView form={form} handleSubmit={handleSubmit} isLoading={isLoading} />;
};

export default RegistrationFormContainer;

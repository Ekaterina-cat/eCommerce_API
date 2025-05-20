import { DefaultValues, FiledName } from '@components/RegistrationForm/constants/registerForm.ts';
import RegistrationFormView from '@components/RegistrationForm/RegistrationFormView.tsx';
import { createCustomerAddresses } from '@components/RegistrationForm/utils/createAddressess.ts';
import { createCustomerUpdateActions } from '@components/RegistrationForm/utils/createCustomerUpdateActions.ts';
import { registrationValidationSchema } from '@components/RegistrationForm/validation/registrationValidationSchema.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { ROUTE_PATH } from '@routes/constants/routes.ts';
import { clientService } from '@services/client/client.service.ts';
import { useUserStore } from '@store/login.store.ts';
import { FormEvent, JSX, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { z } from 'zod';

const RegistrationFormContainer = (): JSX.Element => {
    const form = useForm<z.infer<typeof registrationValidationSchema>>({
        resolver: zodResolver(registrationValidationSchema),
        defaultValues: DefaultValues,
    });
    const navigate = useNavigate();
    const updateIsLoggedIn = useUserStore((state) => state.updateIsLoggedIn);
    const updateLoggedInErrorMessage = useUserStore((state) => state.updateLoggedInErrorMessage);
    const [isLoading, setIsLoading] = useState(false);
    const useAsBillingAddress = useWatch({
        control: form.control,
        name: FiledName.UseAsBillingAddress,
    });

    const onSubmit = async (values: z.infer<typeof registrationValidationSchema>): Promise<void> => {
        setIsLoading(true);

        const addresses = createCustomerAddresses(values);

        const customerResult = await clientService.createCustomer({
            customerData: {
                email: values.email,
                password: values.password,
                firstName: values.firstName,
                lastName: values.lastName,
                dateOfBirth: values.dateOfBirth,
                addresses,
            },
            errorCallback: (errorMessage) => {
                updateLoggedInErrorMessage(errorMessage);
                setIsLoading(false);
            },
        });

        if (customerResult) {
            const customerAddresses = customerResult.customer.addresses ?? [];
            const shipping = customerAddresses[0]?.id;
            const billing = customerAddresses[1]?.id;

            const actions = createCustomerUpdateActions({
                shippingAddressId: shipping,
                billingAddressId: billing,
                defaultShipping: !!values.defaultShippingAddress,
                defaultBilling: !!values.defaultBillingAddress,
            });

            if (actions.length > 0) {
                await clientService.updateCustomer({
                    customerId: customerResult.customer.id,
                    version: customerResult.customer.version,
                    actions,
                    errorCallback: updateLoggedInErrorMessage,
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

    return (
        <RegistrationFormView
            form={form}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            useAsBillingAddress={useAsBillingAddress}
        />
    );
};

export default RegistrationFormContainer;

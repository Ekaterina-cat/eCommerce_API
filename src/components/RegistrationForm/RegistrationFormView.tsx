import Checkbox from '@components/Checkbox/Checkbox.tsx';
import FormInput from '@components/FormInput/FormInput.tsx';
import { FiledName, Label, Placeholder } from '@components/RegistrationForm/constants/registerForm.ts';
import {
    billingAddress,
    countries,
    customerAddress,
    customerDataFields,
    RegisterFormData,
    RegistrationFormViewProps,
} from '@components/RegistrationForm/types/RegistrationForm.ts';
import { Button } from '@components/ui/Button.tsx';
import { Form } from '@components/ui/Form.tsx';
import { JSX } from 'react';

import FormSelect from '../../FormSelect/FormSelect.tsx';

const RegistrationFormView = ({
    form,
    handleSubmit,
    isLoading,
    useAsBillingAddress,
}: RegistrationFormViewProps): JSX.Element => {
    return (
        <>
            <Form {...form}>
                <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded-lg w-full">
                    {customerDataFields.map(({ name, label, placeholder, type }) => (
                        <FormInput<RegisterFormData>
                            key={name}
                            control={form.control}
                            name={name}
                            label={label}
                            placeholder={placeholder}
                            type={type}
                        />
                    ))}

                    <div>
                        <span>Delivery Address:</span>
                        {customerAddress.map(({ name, label, placeholder, type }) => (
                            <FormInput<RegisterFormData>
                                key={name}
                                control={form.control}
                                name={name}
                                label={label}
                                placeholder={placeholder}
                                type={type}
                            />
                        ))}

                        <FormSelect
                            control={form.control}
                            name={FiledName.Country}
                            label={Label.Country}
                            placeholder={Placeholder.Country}
                            data={countries}
                        />

                        <Checkbox
                            control={form.control}
                            name={FiledName.DefaultShippingAddress}
                            label={Label.DefaultShippingAddress}
                        />

                        <Checkbox
                            control={form.control}
                            name={FiledName.UseAsBillingAddress}
                            label={Label.UseAsBillingAddress}
                        />
                    </div>

                    {!useAsBillingAddress && (
                        <>
                            <span>Billing Address:</span>
                            {billingAddress.map(({ name, label, placeholder, type }) => (
                                <FormInput<RegisterFormData>
                                    key={name}
                                    control={form.control}
                                    name={name}
                                    label={label}
                                    placeholder={placeholder}
                                    type={type}
                                />
                            ))}

                            <FormSelect
                                control={form.control}
                                name={FiledName.BillingCountry}
                                label={Label.Country}
                                placeholder={Placeholder.Country}
                                data={countries}
                            />

                            <Checkbox
                                control={form.control}
                                name={FiledName.DefaultBillingAddress}
                                label={Label.DefaultBillingAddress}
                            />
                        </>
                    )}

                    <Button type="submit" disabled={isLoading}>
                        Create Account
                    </Button>
                </form>
            </Form>
        </>
    );
};

export default RegistrationFormView;

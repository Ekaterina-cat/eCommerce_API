import { Button } from '@components/ui/Button';
import { FormEvent, JSX } from 'react';
import { FieldErrors, FormProvider, UseFormReturn } from 'react-hook-form';

import { FormTextInput } from './RegistrationFormContainer';
import { RegistrationFormData } from './types/RegistrationForm';

interface RegistrationFormViewProps {
    form: UseFormReturn<RegistrationFormData>;
    errors: FieldErrors<RegistrationFormData>;
    handleRegisterFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export const RegistrationFormView = ({
    form,
    errors,
    handleRegisterFormSubmit,
}: RegistrationFormViewProps): JSX.Element => {
    return (
        <FormProvider {...form}>
            <div className="flex justify-center">
                <form onSubmit={handleRegisterFormSubmit} className="space-y-4 border p-4 rounded-lg">
                    <FormTextInput
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="example@domain.com"
                        description="This is your email."
                        form={form}
                        error={errors.email}
                    />
                    <FormTextInput
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        form={form}
                        error={errors.password}
                    />
                    <FormTextInput
                        label="First Name"
                        name="firstName"
                        placeholder="First Name"
                        form={form}
                        error={errors.firstName}
                    />
                    <FormTextInput
                        label="Last Name"
                        name="lastName"
                        placeholder="Last Name"
                        form={form}
                        error={errors.lastName}
                    />
                    <FormTextInput
                        label="Date of Birth"
                        name="dateOfBirth"
                        type="date"
                        placeholder={''}
                        form={form}
                        error={errors.dateOfBirth}
                    />
                    <FormTextInput
                        label="Street"
                        name="street"
                        placeholder="Street"
                        form={form}
                        error={errors.street}
                    />
                    <FormTextInput label="City" name="city" placeholder="City" form={form} error={errors.city} />
                    <div className="grid grid-cols-2 gap-4">
                        <FormTextInput
                            label="Postal Code"
                            name="postalCode"
                            placeholder="Postal Code"
                            form={form}
                            error={errors.postalCode}
                        />
                        <FormTextInput
                            label="Country"
                            name="country"
                            placeholder="Country"
                            form={form}
                            error={errors.country}
                        />
                    </div>
                    <Button
                        type="submit"
                        variant="default"
                        size="lg"
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                        Register
                    </Button>
                </form>
            </div>
        </FormProvider>
    );
};

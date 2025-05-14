import { Button } from '@components/ui/Button';
import { Form } from '@components/ui/Form';
import { JSX } from 'react';
import { useForm } from 'react-hook-form';

import { FormTextInput } from './RegistrationFormContainer';

export const RegistrationForm = (): JSX.Element => {
    const form = useForm<FormData>();

    return (
        <Form {...form}>
            <div className="flex justify-center">
                <form className="space-y-4 border p-4 rounded-lg">
                    <FormTextInput
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="example@domain.com"
                        description="This is your email."
                    />
                    <FormTextInput label="Password" name="password" type="password" placeholder="Password" />
                    <FormTextInput label="First Name" name="firstName" placeholder="First Name" />
                    <FormTextInput label="Last Name" name="lastName" placeholder="Last Name" />
                    <FormTextInput label="Date of Birth" name="dateOfBirth" type="date" placeholder={''} />
                    <FormTextInput label="Street" name="street" placeholder="Street" />
                    <FormTextInput label="City" name="city" placeholder="City" />
                    <div className="grid grid-cols-2 gap-4">
                        <FormTextInput label="Postal Code" name="postalCode" placeholder="Postal Code" />
                        <FormTextInput label="Country" name="country" placeholder="Country" />
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
        </Form>
    );
};

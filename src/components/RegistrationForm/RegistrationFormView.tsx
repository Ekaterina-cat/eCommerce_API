import { FormSelectInput } from '@components/FormSelectInput';
import { FormTextInput } from '@components/FormTextInput';
import { Button } from '@components/ui/Button';
import { FormEvent, JSX } from 'react';
import { FieldErrors, FormProvider, UseFormReturn } from 'react-hook-form';

import { formFields, RegistrationFormData } from './types/RegistrationForm';

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
                    {formFields.map((field, index) => {
                        const shouldRenderField = index < formFields.length - 1;

                        return shouldRenderField ? (
                            <div key={field.name} className="grid mb-4">
                                <FormTextInput
                                    label={field.label}
                                    name={field.name}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    form={form}
                                    error={errors[field.name]}
                                />
                            </div>
                        ) : null;
                    })}

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        {formFields.slice(-1).map((field) => (
                            <FormTextInput
                                key={field.name}
                                label={field.label}
                                name={field.name}
                                placeholder={field.placeholder}
                                form={form}
                                error={errors[field.name]}
                            />
                        ))}

                        <div className="grid mb-4">
                            <FormSelectInput form={form} label={'file.label'} name={'email'} />
                        </div>
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

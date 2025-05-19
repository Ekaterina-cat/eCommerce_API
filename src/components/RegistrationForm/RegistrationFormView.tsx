import FormInput from '@components/FormInput/FormInput.tsx';
import { Button } from '@components/ui/Button.tsx';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@components/ui/Form.tsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@components/ui/Select.tsx';
import { FormEvent, JSX } from 'react';
import { FieldPath, FieldValues, UseFormReturn } from 'react-hook-form';

type RegisterFormData = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    streetName: string;
    city: string;
    postalCode: string;
    country: string;
};

interface RegisterFormViewProps {
    form: UseFormReturn<RegisterFormData>;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

type TextFieldConfig<T extends FieldValues> = {
    name: FieldPath<T>;
    label: string;
    placeholder?: string;
    type?: string;
};

const textFields: TextFieldConfig<RegisterFormData>[] = [
    { name: 'email', label: 'Email', placeholder: 'test@test.com', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'firstName', label: 'First Name' },
    { name: 'lastName', label: 'Last Name' },
    { name: 'streetName', label: 'Street' },
    { name: 'city', label: 'City' },
    { name: 'postalCode', label: 'Postal Code' },
    { name: 'dateOfBirth', label: 'Date of Birth', type: 'date' },
];

const countries = [
    { label: 'Belarus', value: 'BY' },
    { label: 'Poland', value: 'PL' },
    { label: 'Germany', value: 'DE' },
];

const RegisterFormView = ({ form, handleSubmit }: RegisterFormViewProps): JSX.Element => {
    return (
        <Form {...form}>
            <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded-lg w-full">
                {textFields.map(({ name, label, placeholder, type }) => (
                    <FormInput<RegisterFormData>
                        key={name}
                        control={form.control}
                        name={name}
                        label={label}
                        placeholder={placeholder}
                        type={type}
                    />
                ))}

                <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Country</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a country" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {countries.map(({ label, value }) => (
                                        <SelectItem key={value} value={value}>
                                            {label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
};

export default RegisterFormView;

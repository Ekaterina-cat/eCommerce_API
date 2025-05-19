import FormInput from '@components/FormInput/FormInput.tsx';
import {
    countries,
    RegisterFormData,
    RegistrationFormViewProps,
    textFields,
} from '@components/RegistrationForm/types/RegistrationForm.ts';
import { Button } from '@components/ui/Button.tsx';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@components/ui/Form.tsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@components/ui/Select.tsx';
import { JSX } from 'react';

const RegistrationFormView = ({ form, handleSubmit }: RegistrationFormViewProps): JSX.Element => {
    return (
        <>
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
        </>
    );
};

export default RegistrationFormView;

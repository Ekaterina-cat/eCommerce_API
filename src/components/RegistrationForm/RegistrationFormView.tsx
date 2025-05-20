import FormInput from '@components/FormInput/FormInput.tsx';
import {
    countries,
    customerAddress,
    customerDataFields,
    RegisterFormData,
    RegistrationFormViewProps,
} from '@components/RegistrationForm/types/RegistrationForm.ts';
import { Button } from '@components/ui/Button.tsx';
import { Checkbox } from '@components/ui/Checkbox.tsx';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@components/ui/Form.tsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@components/ui/Select.tsx';
import { JSX } from 'react';

const RegistrationFormView = ({ form, handleSubmit, isLoading }: RegistrationFormViewProps): JSX.Element => {
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

                        <FormField
                            control={form.control}
                            name="defaultShippingAddress"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                                    <FormControl>
                                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>Set as default delivery address</FormLabel>
                                    </div>
                                </FormItem>
                            )}
                        />
                    </div>

                    <Button type="submit" disabled={isLoading}>
                        Create Account
                    </Button>
                </form>
            </Form>
        </>
    );
};

export default RegistrationFormView;

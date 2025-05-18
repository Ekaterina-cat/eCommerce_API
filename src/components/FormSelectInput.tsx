import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select';
import React, { JSX, useState } from 'react';

import { FormInputProps } from './RegistrationForm/types/RegistrationForm';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/Form';

const listCountry = [
    { value: 'BY', label: 'Belarus' },
    { value: 'RU', label: 'Russia' },
    { value: 'PL', label: 'Poland' },
    { value: 'DE', label: 'Germany' },
];

export const FormSelectInput: React.FC<FormInputProps> = ({ form, error }): JSX.Element => {
    const [selectedValue] = useState<string>('');
    // const handleValueChange = (value: string): void => {
    // form.setValue('country', value);
    // const currentValue = form.getValues('country');
    // console.log('Selected value:', value);
    // console.log('Current value:', currentValue);
    // };
    return (
        <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Country</FormLabel>
                    <Select onValueChange={field.onChange} value={selectedValue}>
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a country" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {listCountry.map(({ label, value }) => (
                                <SelectItem key={value} value={value}>
                                    {label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <FormMessage>{error?.message}</FormMessage>
                </FormItem>
            )}
        />
    );
};

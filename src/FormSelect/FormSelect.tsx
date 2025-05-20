import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@components/ui/Form.tsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@components/ui/Select.tsx';
import { JSX } from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';

type FormSelectProps<T extends FieldValues> = {
    control: Control<T>;
    name: FieldPath<T>;
    label?: string;
    placeholder?: string;
    data: { label: string; value: string }[];
};

const FormSelect = <T extends FieldValues>(props: FormSelectProps<T>): JSX.Element => {
    const { control, name, label, placeholder, data } = props;

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder={placeholder} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {data.map(({ label, value }) => (
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
    );
};

export default FormSelect;

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@components/ui/Form.tsx';
import { Input } from '@components/ui/Input.tsx';
import { JSX } from 'react';
import { Control, FieldError, FieldPath, FieldValues } from 'react-hook-form';

type FormInputProps<T extends FieldValues> = {
    control: Control<T>;
    name: FieldPath<T>;
    label?: string;
    placeholder?: string;
    description?: string;
    type?: string;
    error?: FieldError;
};

const FormInput = <T extends FieldValues>(props: FormInputProps<T>): JSX.Element => {
    const { control, name, label, placeholder, description } = props;

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    {label && <FormLabel>{label}</FormLabel>}
                    <FormControl>
                        <Input placeholder={placeholder} {...field} />
                    </FormControl>
                    {description && <FormDescription>{description}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default FormInput;

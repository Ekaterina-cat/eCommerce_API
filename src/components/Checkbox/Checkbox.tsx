import { Checkbox as LibraryCheckbox } from '@components/ui/Checkbox.tsx';
import { FormControl, FormField, FormItem, FormLabel } from '@components/ui/Form.tsx';
import { JSX } from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';

type CheckboxProps<T extends FieldValues> = {
    control: Control<T>;
    name: FieldPath<T>;
    label?: string;
};

const Checkbox = <T extends FieldValues>(props: CheckboxProps<T>): JSX.Element => {
    const { control, name, label } = props;

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                    <FormControl>
                        <LibraryCheckbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                        <FormLabel>{label}</FormLabel>
                    </div>
                </FormItem>
            )}
        />
    );
};

export default Checkbox;

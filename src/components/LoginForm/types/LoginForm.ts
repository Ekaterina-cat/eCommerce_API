import React from 'react';
import { UseFormReturn } from 'react-hook-form';

export type LoginInputs = {
    email: string;
    password: string;
};

export type LoginFormViewProps = {
    form: UseFormReturn<LoginInputs>;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    isLoading: boolean;
};

import { UseFormRegisterReturn } from 'react-hook-form';

export interface TextInputProps {
    label: string;
    errors?: string;
    placeholder: string;
    inputProps: UseFormRegisterReturn;
    type: string;
}

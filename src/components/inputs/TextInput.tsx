import React, { FC } from 'react';
import { TextInputProps } from './props';

const TextInput: FC<TextInputProps> = ({
    label, errors, placeholder, inputProps, type,
}) => (
    <div className="relative form-control w-full pb-6 my-1">
        <label className="label">
            <span className="label-text font-medium text-lg">{label}</span>
        </label>
        <input {...inputProps} type={type} className="input input-bordered" placeholder={placeholder} />
        <span className="absolute bottom-0 right-0 text-sm text-error">{errors}</span>
    </div>
);

export default TextInput;

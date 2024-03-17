import React, { Dispatch, SetStateAction } from 'react';
import { isNull, isUndefined } from 'helpers/Util';

interface ITextInput {
  label: string;
  id: string;
  value: number | string;
  type: React.HTMLInputTypeAttribute;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  min?: number;
  max?: number;
}

const TextField = ({ label, id, value, type, onChange, disabled, min, max }: ITextInput) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={isNull(value) ? '' : value}
        onChange={(e) => onChange(e)}
        disabled={isUndefined(disabled) ? false : disabled}
        min={isUndefined(min) ? 0 : min}
        max={isUndefined(max) ? Number.POSITIVE_INFINITY : max}
      />
    </>
  );
};
TextField.displayName = 'TextField';
export default TextField;

import React, { Dispatch, SetStateAction } from 'react';
import { isNull, isUndefined } from 'helpers/Util';
import styles from './Common.module.scss';

interface ITextInput {
  label: string;
  id: string;
  value: number | string;
  type: React.HTMLInputTypeAttribute;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  min?: number;
  max?: number;
  errMsg?: string | null;
}

const TextField = ({ label, id, value, type, onChange, disabled, min, max, errMsg }: ITextInput) => {
  return (
    <>
      <div className={styles.textField}>
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
      </div>
      {!isNull(errMsg) && <p className={styles.errMsg}>{errMsg}</p>}
    </>
  );
};
TextField.displayName = 'TextField';
export default TextField;

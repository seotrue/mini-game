import React from 'react';
import styles from './Common.module.scss';
import { isUndefined } from '../helpers/Util';

interface IButton {
  onClickAction: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}
export const Button = ({ children, onClickAction, disabled = false, className }: IButton) => {
  return (
    <button
      className={isUndefined(className) ? styles.commonButton : className}
      disabled={disabled}
      onClick={onClickAction}
    >
      {children}
    </button>
  );
};

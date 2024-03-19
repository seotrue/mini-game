import React from 'react';
import styles from './Common.module.scss';

interface IButton {
  onClickAction: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}
export const Button = ({ children, onClickAction, disabled = false }: IButton) => {
  return (
    <button className={styles.commonButton} disabled={disabled} onClick={onClickAction}>
      {children}
    </button>
  );
};

import React from 'react';

interface IButton {
  onClickAction: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}
export const Button = ({ children, onClickAction, disabled = false }: IButton) => {
  return (
    <button disabled={disabled} onClick={onClickAction}>
      {children}
    </button>
  );
};

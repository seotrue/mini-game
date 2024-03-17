import React from 'react';

interface IButton {
  onClickAction: () => void;
  children: React.ReactNode;
}
export const Button = ({ children, onClickAction }: IButton) => {
  return <div onClick={onClickAction}> {children}</div>;
};

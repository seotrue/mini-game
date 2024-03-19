import React from 'react';
export const Timer = ({ internalTime, className }) => {
  return (
    <span className={className}>
      남은시간: <em>{`${internalTime / 1000}`}</em>초
    </span>
  );
};

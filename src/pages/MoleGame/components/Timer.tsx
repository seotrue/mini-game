import React from 'react';
export const Timer = ({ internalTime }) => {
  return <span>{`남은시간: ${internalTime / 1000}초`}</span>;
};

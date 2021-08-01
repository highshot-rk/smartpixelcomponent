import React, { ReactElement } from 'react';

export const ArrowUp = ({color, darkColor=""}) => {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg" className={`fill-current ${darkColor} ${color}`}>
      <path
        d="M4.99993 2.121L1.28743 5.8335L0.226929 4.773L4.99993 0L9.77293 4.773L8.71243 5.8335L4.99993 2.121Z"
      />
    </svg>
  );
}

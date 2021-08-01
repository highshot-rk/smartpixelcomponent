import React, { ReactElement } from 'react';

export const ArrowDown = ({color, darkColor="", hoverColor="" }) => {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg" className={`fill-current ${darkColor} ${color}`} >
      <path
        d="M5.00005 3.879L8.71255 0.166504L9.77305 1.227L5.00005 6L0.227051 1.227L1.28755 0.166504L5.00005 3.879Z"
      />
    </svg>
  );
}

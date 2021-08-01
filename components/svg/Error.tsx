import React from 'react';

export const ErrorIcon = ({color, darkColor=""}) => {
  return (
    <svg
      height="15"
      viewBox="0 0 32 32"
      width="15"
      className={`fill-current ${darkColor} ${color}`}
      xmlns="http://www.w3.org/2000/svg">
      <g>
        <g id="Error_1_">
          <g id="Error">
            <circle cx="16" cy="16" id="BG" r="16" />
            <path
              d="M14.5,25h3v-3h-3V25z M14.5,6v13h3V6H14.5z"
              id="Exclamatory_x5F_Sign"
              fill="white"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

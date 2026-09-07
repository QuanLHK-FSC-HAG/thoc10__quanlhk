import React from 'react';

export const VietnamFlag: React.FC<{ className?: string }> = ({ className = 'w-5 h-3.5' }) => (
  <svg
    viewBox="0 0 30 20"
    className={`inline-block rounded-xs shadow-xs shrink-0 overflow-hidden ${className}`}
    aria-label="Vietnam Flag"
  >
    <rect width="30" height="20" fill="#DA251D" />
    <polygon
      points="15,4 16.5,8.8 21.6,8.8 17.5,11.8 19,16.6 15,13.6 11,16.6 12.5,11.8 8.4,8.8 13.5,8.8"
      fill="#FFFF00"
    />
  </svg>
);

export const UKFlag: React.FC<{ className?: string }> = ({ className = 'w-5 h-3.5' }) => (
  <svg
    viewBox="0 0 60 30"
    className={`inline-block rounded-xs shadow-xs shrink-0 overflow-hidden ${className}`}
    aria-label="UK Flag"
  >
    <clipPath id="uk-flag-clip">
      <rect width="60" height="30" />
    </clipPath>
    <g clipPath="url(#uk-flag-clip)">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

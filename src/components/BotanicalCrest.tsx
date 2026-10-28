import React from "react";

interface BotanicalCrestProps {
  className?: string;
  size?: number;
  color?: string;
}

export default function BotanicalCrest({
  className = "",
  size = 32,
  color = "currentColor",
}: BotanicalCrestProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer subtle circular ring */}
      <circle
        cx="24"
        cy="24"
        r="22"
        stroke={color}
        strokeWidth="0.8"
        strokeOpacity="0.4"
      />
      
      {/* Central botanical stem */}
      <path
        d="M24 35V16"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Center bloom */}
      <circle cx="24" cy="14" r="1.8" fill={color} />

      {/* Left branch & bud */}
      <path
        d="M24 25C21 22 18 22 16 19"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="15.5" cy="18.5" r="1.4" fill={color} />

      {/* Right branch & bud */}
      <path
        d="M24 25C27 22 30 22 32 19"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="32.5" cy="18.5" r="1.4" fill={color} />

      {/* Delicate leaves */}
      <path
        d="M24 29C21.8 28.2 20 29.2 19 31C21 31 23 30 24 29Z"
        fill={color}
        opacity="0.85"
      />
      <path
        d="M24 29C26.2 28.2 28 29.2 29 31C27 31 25 30 24 29Z"
        fill={color}
        opacity="0.85"
      />

      {/* Botanical dew drop */}
      <path
        d="M24 37.5C22.8 37.5 22 38.3 22 39.5C22 40.8 24 43 24 43C24 43 26 40.8 26 39.5C26 38.3 25.2 37.5 24 37.5Z"
        fill={color}
      />
    </svg>
  );
}

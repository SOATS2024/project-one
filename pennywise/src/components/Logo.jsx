const Logo = ({ width = 40, height = 40 }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
        width={width}
        height={height}
      >
        {/* <!-- Logo Container --> */}
        <g>
          {/* <!-- Stacked Coins --> */}
          <ellipse
            cx="20"
            cy="26"
            rx="16"
            ry="4"
            fill="#00A86B"
            opacity="0.3"
          />
          <ellipse
            cx="20"
            cy="22"
            rx="16"
            ry="4"
            fill="#00A86B"
            opacity="0.5"
          />

          {/* <!-- Main Coin with Light Green Border --> */}
          <ellipse cx="20" cy="18" rx="16" ry="4" fill="#00A86B" />
          <circle
            cx="20"
            cy="18"
            r="12"
            fill="#00A86B"
            stroke="#90EE90"
            stroke-width="0.1"
          />
          <text
            x="20"
            y="22"
            font-size="12"
            font-weight="bold"
            text-anchor="middle"
            fill="white"
          >
            P
          </text>
        </g>
      </svg>
    </div>
  );
};

export default Logo;

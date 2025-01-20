const Logo = ({ width = 40, height = 40 }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
        width={width}
        height={height}
      >
        <g>
          {/* Change stroke-width to strokeWidth */}
          <circle
            cx="20"
            cy="18"
            r="12"
            fill="#00A86B"
            stroke="#90EE90"
            strokeWidth="0.1"
          />
          {/* Change font-size to fontSize, font-weight to fontWeight, text-anchor to textAnchor */}
          <text
            x="20"
            y="22"
            fontSize="12"
            fontWeight="bold"
            textAnchor="middle"
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

import PropTypes from "prop-types";

const Logo = ({ width = 40, height = 40, isLogo = true }) => {
  return (
    <div className="inline-block">
      {" "}
      {/* Added inline-block */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
        width={width}
        height={height}
        className={isLogo ? "" : "origin-center animate-spinCustom"}
      >
        {/* <!-- Logo Container --> */}
        <g>
          {/* <!-- Stacked Coins --> */}
          {isLogo && (
            <>
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
            </>
          )}
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
Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  isLogo: PropTypes.bool,
};

export { Logo };

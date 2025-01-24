import PropTypes from "prop-types";

const Glint = ({ height = 40, width = 40, delay = "3s" }) => {
  return (
    <div>
      <svg
        width={height}
        height={width}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-pingCustom"
        style={{ animationDelay: delay }}
      >
        <path
          d="M20 5C20 13.2941 13.2941 20 5 20C13.2941 20 20 26.7059 20 35C20 26.7059 26.7059 20 35 20C26.7059 20 20 13.2941 20 5Z"
          fill="#06c689"
          strokeWidth="0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
Glint.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  delay: PropTypes.string,
};

export default Glint;

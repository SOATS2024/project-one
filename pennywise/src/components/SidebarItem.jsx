import { useContext } from "react";
import PropTypes from "prop-types";
import { SidebarContext } from "./Sidebar";

const SidebarItem = ({
  icon,
  text,
  active = false, // Default parameter instead of defaultProps
  alert = false, // Default parameter instead of defaultProps
  onClick = () => {}, // Default parameter instead of defaultProps
}) => {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      onClick={onClick}
      className={`
        relative flex items-center  py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr bg-primary dark:bg-dark_primary text-white dark:text-slate-950"
            : "hover:bg-background dark:hover:bg-dark_background text-gray-600 dark:text-gray-400"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-primary ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-primary dark:bg-dark_primary text-white dark:text-slate-950 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          z-50 text-nowrap
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
};

SidebarItem.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  alert: PropTypes.bool,
  onClick: PropTypes.func,
};

export { SidebarItem };

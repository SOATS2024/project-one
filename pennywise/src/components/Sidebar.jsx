import { createContext, useState, useEffect } from "react";
import {
  LayoutDashboard,
  Wallet,
  Clock,
  CalendarDays,
  CalendarRange,
  Settings,
  HelpCircle,
  Menu,
  X,
} from "lucide-react";
import PropTypes from "prop-types";

export const SidebarContext = createContext({ expanded: true });

export const Sidebar = ({ children, logo, user }) => {
  const [expanded, setExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile && expanded) {
        setExpanded(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [expanded]);

  const toggleSidebar = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    } else {
      setExpanded(!expanded);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && !isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-white dark:bg-slate-950 shadow-md hover:bg-gray-50 dark:hover:bg-slate-800"
        >
          <Menu className="w-6 h-6 text-gray-600 dark:text-gray-200" />
        </button>
      )}

      {/* Mobile Backdrop */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          ${
            isMobile
              ? `fixed inset-y-0 left-0 z-50 transform ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
                }`
              : "sticky top-0"
          }
          h-screen transition-all duration-300 ease-in-out
        `}
      >
        <nav className="h-full flex flex-col bg-white dark:bg-slate-950 border-r shadow-lg">
          {/* Header */}
          <div className="p-4 pb-2 flex justify-between items-center">
            <div
              className={`
                overflow-hidden transition-all
                ${expanded || isMobile ? "w-34" : "w-0"}
                flex items-center 
              `}
            >
              {logo}
              <span className="font-pennywise text-lg dark:text-gray-200">
                enny
                <span className="text-secondary dark:text-dark_secondary">
                  Wise
                </span>
              </span>
            </div>
            {isMobile ? (
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-gray-100 dark:bg-slate-800 dark:hover:bg-slate-600"
              >
                <X className="w-5 h-5 text-gray-600 dark:text-gray-200" />
              </button>
            ) : (
              <button
                onClick={toggleSidebar}
                className="p-1.5 rounded-lg bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-600"
              >
                {expanded ? (
                  <X className="dark:text-gray-200" />
                ) : (
                  <Menu className="dark:text-gray-200" />
                )}
              </button>
            )}
          </div>

          {/* Navigation Items */}
          <SidebarContext.Provider value={{ expanded: expanded || isMobile }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>

          {/* User Profile */}
          {user && (
            <div className="border-t flex p-3 items-center justify-between hover:bg-background transition-colors">
              <div className="flex items-center min-w-0">
                <img
                  src={
                    user.photoURL ||
                    `https://ui-avatars.com/api/?name=${
                      user.displayName || "User"
                    }&background=c7d2fe&color=3730a3&bold=true`
                  }
                  alt="User avatar"
                  className="w-10 h-10 rounded-md"
                />
                <div
                  className={`
                    overflow-hidden transition-all
                    ${expanded || isMobile ? "w-52 ml-3" : "w-0"}
                  `}
                >
                  <h4 className="font-semibold truncate dark:text-gray-200">
                    {user.displayName || "User"}
                  </h4>
                  <span className="text-xs text-gray-600 dark:text-gray-400 truncate block">
                    {user.email}
                  </span>
                </div>
              </div>
            </div>
          )}
        </nav>
      </aside>
    </>
  );
};

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
  logo: PropTypes.node,
  user: PropTypes.shape({
    photoURL: PropTypes.string,
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
  }),
  onLogout: PropTypes.func.isRequired,
};

export const sidebarIcons = {
  dashboard: LayoutDashboard,
  wallet: Wallet,
  clock: Clock,
  calendar: CalendarDays,
  all: CalendarRange,
  settings: Settings,
  help: HelpCircle,
};

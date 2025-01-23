import { ChevronLast, ChevronFirst, LogOut } from "lucide-react";
import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const SidebarContext = createContext({ expanded: true });

export const Sidebar = ({ children, logo, user, onLogout }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="sticky top-0 h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <div
            className={`overflow-hidden transition-all ${
              expanded ? "w-34" : "w-0"
            } flex items-center gap-2`}
          >
            {logo}
            <span className="font-pennywise text-lg">
              enny<span className="text-secondary">Wise</span>
            </span>
          </div>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        {user && (
          <div className="border-t flex p-3 items-center justify-between hover:bg-gray-50 transition-colors">
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
                  overflow-hidden transition-all ${
                    expanded ? "w-52 ml-3" : "w-0"
                  }
                `}
              >
                <h4 className="font-semibold truncate">
                  {user.displayName || "User"}
                </h4>
                <span className="text-xs text-gray-600 truncate block">
                  {user.email}
                </span>
              </div>
            </div>
            {expanded && (
              <button
                onClick={onLogout}
                className="p-1.5 rounded-lg hover:bg-gray-100"
              >
                <LogOut size={20} className="text-gray-600" />
              </button>
            )}
          </div>
        )}
      </nav>
    </aside>
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

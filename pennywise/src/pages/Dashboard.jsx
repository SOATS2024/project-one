import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/firebase";
import { ExpenseList } from "../components/ExpenseList";
import { Sidebar } from "../components/Sidebar";
import { SidebarItem } from "../components/SidebarItem";
import { Logo } from "../components/Logo";
import {
  LayoutDashboard,
  Calendar,
  Clock,
  CalendarDays,
  CalendarRange,
  Settings,
  LifeBuoy,
  LogOut,
  Loader2,
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const firebase = useFirebase();
  const [error, setError] = useState(null);
  const [activeTimeFrame, setActiveTimeFrame] = useState("today");
  const [user, setUser] = useState(null);
  const [selectedExpense, setSelectedExpense] = useState(null);

  useEffect(() => {
    if (firebase.currentUser) {
      setUser(firebase.currentUser);
    }
  }, [firebase.currentUser]);

  const timeFrames = [
    {
      id: "today",
      icon: <Clock size={20} />,
      text: "Today's Expenses",
      active: true,
    },
    {
      id: "week",
      icon: <Calendar size={20} />,
      text: "This Week",
    },
    {
      id: "month",
      icon: <CalendarDays size={20} />,
      text: "This Month",
    },
    {
      id: "all",
      icon: <CalendarRange size={20} />,
      text: "All Time",
    },
  ];

  const handleTimeFrameChange = (timeFrame) => {
    setActiveTimeFrame(timeFrame);
  };

  const handleLogout = async () => {
    try {
      await firebase.logOut();
      navigate("/login");
    } catch (error) {
      setError("Failed to log out");
    }
  };

  const clearSelectedExpense = () => {
    setSelectedExpense(null);
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="animate-spin h-8 w-8 text-secondary" />
      </div>
    );
  }

  return (
    <div className="flex  h-screen bg-background  dark:bg-dark_background">
      <Sidebar
        onLogout={handleLogout}
        logo={<Logo width={40} height={40} />}
        user={user}
      >
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          active={true}
        />
        <hr className="my-3" />
        {timeFrames.map((frame) => (
          <SidebarItem
            key={frame.id}
            icon={frame.icon}
            text={frame.text}
            active={activeTimeFrame === frame.id}
            onClick={() => handleTimeFrameChange(frame.id)}
          />
        ))}
        <hr className="my-3" />
        <SidebarItem icon={<Settings size={20} />} text="Settings" />
        <SidebarItem
          icon={<LifeBuoy size={20} />}
          text="Help"
          onClick={() => navigate("/contact")}
        />
        <SidebarItem
          icon={<LogOut size={20} />}
          text="Logout"
          onClick={handleLogout}
        />
      </Sidebar>

      <main className="flex-1 p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              {error}
            </div>
          )}

          <header className="space-y-2">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 font-header">
              {timeFrames.find((f) => f.id === activeTimeFrame)?.text ||
                "Dashboard"}
            </h1>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-content">
              Welcome back, {user.displayName || "User"}
            </p>
          </header>

          <div className="grid grid-cols-1  gap-6">
            <div className="lg:col-span-2">
              <ExpenseList
                timeFrame={activeTimeFrame}
                setSelectedExpense={setSelectedExpense}
                clearSelectedExpense={clearSelectedExpense}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export { Dashboard };

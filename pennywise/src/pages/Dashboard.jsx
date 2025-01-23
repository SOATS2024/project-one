import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/firebase";
import ExpenseList from "../components/ExpenseList";
import { Sidebar, SidebarItem } from "../components/Sidebar";
import Logo from "../components/Logo";
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
      console.error(error);
    }
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="animate-spin h-8 w-8 text-secondary" />
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar
        onLogout={handleLogout}
        logo={<Logo width={40} height={40} />}
        user={user}
      >
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard Overview"
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
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        <SidebarItem
          icon={<LogOut size={20} />}
          text="Logout"
          onClick={handleLogout}
        />
      </Sidebar>

      <main className="flex-1 p-4 overflow-auto">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            {error}
          </div>
        )}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 font-header">
            {activeTimeFrame === "today"
              ? "Today's Expenses"
              : activeTimeFrame === "week"
              ? "This Week's Expenses"
              : activeTimeFrame === "month"
              ? "This Month's Expenses"
              : "All Expenses"}
          </h1>
          <p className="text-gray-600 font-content">
            Welcome back, {user.displayName || "User"}
          </p>
        </div>
        <ExpenseList timeFrame={activeTimeFrame} />
      </main>
    </div>
  );
};

export { Dashboard };

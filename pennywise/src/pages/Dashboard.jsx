import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/firebase";
import { ExpenseList } from "../components/ExpenseList";
import { Sidebar } from "../components/Sidebar";
import { SidebarItem } from "../components/SidebarItem";
import { Logo } from "../components/Logo";
import { ContactUs } from "../components/ContactUs";
import {
  LayoutDashboard,
  Calendar,
  Clock,
  CalendarDays,
  CalendarRange,
  LifeBuoy,
  LogOut,
  Loader2,
  Moon,
  Sun,
  Contact,
} from "lucide-react";


const Dashboard = () => {
  const navigate = useNavigate();
  const firebase = useFirebase();
  const [error, setError] = useState(null);
  const [activeTimeFrame, setActiveTimeFrame] = useState("today");
  const [user, setUser] = useState(null);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
    
  );
  const [showHelp, setShowHelp] = useState(false);

  const handleHelpClick = () => {
    setShowHelp(!showHelp);
    
    console.log("showHelp state:", showHelp);
  };


  useEffect(() => {
    const htmlElement = document.documentElement;
    if (darkMode) {
      htmlElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      htmlElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

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
        <SidebarItem
          icon={darkMode ? <Sun size={20} /> : <Moon size={20} />}
          text={darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
          onClick={toggleDarkMode}
        />
        <SidebarItem
          icon={<LifeBuoy size={20} />}
          text="Help"
          onClick={handleHelpClick}
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
            <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 font-header tracking-wider">
              Dashboard
            </h1>
            <h2 className="text-lg md:text-base lg:text-lg font-bold text-gray-800 dark:text-gray-400 font-header">
              {timeFrames.find((f) => f.id === activeTimeFrame)?.text ||
                "Dashboard"}
            </h2>
          </header>

          {showHelp ? 
          <ContactUs/> :

            <div className="grid grid-cols-1  gap-6">
            <div className="lg:col-span-2">
              <ExpenseList
                timeFrame={activeTimeFrame}
                setSelectedExpense={setSelectedExpense}
                clearSelectedExpense={clearSelectedExpense}
              />
            </div>
          </div>
          }
          

          
        </div>
      </main>
      

    </div>

  );
};

export { Dashboard };

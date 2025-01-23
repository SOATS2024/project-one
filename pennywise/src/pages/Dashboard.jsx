import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFirebase } from "../context/firebase";
import ExpenseList from "../components/ExpenseList";
import { Sidebar, SidebarItem } from "../components/Sidebar";
import {
  LayoutDashboard,
  Home,
  StickyNote,
  Layers,
  Flag,
  Calendar,
  LifeBuoy,
  Settings,
  LogOut,
} from "lucide-react";
import Logo from "../components/Logo";

const Dashboard = () => {
  const navigate = useNavigate();
  const firebase = useFirebase();
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (firebase.currentUser) {
      setUser(firebase.currentUser);
    }
  }, [firebase.currentUser]);

  const handleLogout = async () => {
    try {
      await firebase.logOut();
      navigate("/login");
    } catch (error) {
      setError("Failed to log out");
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar
        onLogout={handleLogout}
        logo={<Logo width={40} height={40} />}
        user={user}
      >
        <SidebarItem icon={<Home size={20} />} text="Home" />
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          active
        />
        <SidebarItem icon={<StickyNote size={20} />} text="Projects" />
        <SidebarItem icon={<Calendar size={20} />} text="Calendar" />
        <SidebarItem icon={<Layers size={20} />} text="Tasks" />
        <SidebarItem icon={<Flag size={20} />} text="Reporting" />
        <hr className="my-3" />
        <SidebarItem icon={<Settings size={20} />} text="Settings" />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        <SidebarItem
          icon={<LogOut size={20} />}
          text="Logout"
          onClick={handleLogout}
        />
      </Sidebar>
      <main className="flex-1 p-4">
        <ExpenseList />
      </main>
    </div>
  );
};

export { Dashboard };

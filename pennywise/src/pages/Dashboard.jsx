import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFirebase } from "../context/firebase";
import ExpenseForm from "../components/ExpenseInput";
import ExpenseList from "../components/ExpenseList";
import Navbar from "../components/Navbar";
import Sidebar, { SidebarItem } from "../components/Sidebar";
import {
  LayoutDashboard,
  Home,
  StickyNote,
  Layers,
  Flag,
  Calendar,
  LifeBuoy,
  Settings,
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const firebase = useFirebase();
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {
      await firebase.logOut();
      navigate("/Login");
    } catch {
      setError("An error occurred while Signing Out");
    }
  };

  return (
    <>
      {/* <div className="grid grid-cols-3 gap-2 items-center">
        <div>Hello world!</div>
        <div>Hello world!</div>
        <div>
          <ExpenseForm />
        </div>
      </div> */}
      {/* <div>Dashboard</div>
      <h1>Click the button below:</h1>
      <button onClick={handleSubmit}>Sign Out</button> */}
      <div className="flex mt-2">
        <Sidebar>
          <SidebarItem icon={<Home size={20} />} text="Home" alert />
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            active
          />
          <SidebarItem icon={<StickyNote size={20} />} text="Projects" alert />
          <SidebarItem icon={<Calendar size={20} />} text="Calendar" />
          <SidebarItem icon={<Layers size={20} />} text="Tasks" />
          <SidebarItem icon={<Flag size={20} />} text="Reporting" />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        </Sidebar>
        <ExpenseForm />
        <ExpenseList />
        {/* <div className="bg-background min-h-screen"></div> */}
      </div>
    </>
  );
};

export default Dashboard;

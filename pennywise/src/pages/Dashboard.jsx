import ExpenseForm from "../components/ExpenseInput";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    // <div className="grid grid-cols-3 gap-2 items-center">
    //   <div>Hello world!</div>
    //   <div>Hello world!</div>
    //   <div>
    //     <ExpenseForm />
    //   </div>
    // </div>

    <div className="bg-background min-h-screen">
      <Navbar isWelcome={false} />
      <ExpenseForm />
    </div>
  );
};

export default Dashboard;

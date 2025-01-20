import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFirebase } from "../context/firebase"
import ExpenseForm from "../components/ExpenseInput";
import ExpenseList from "../components/ExpenseList";
import Navbar from "../components/Navbar";

export default function Dashboard() {
    const navigate = useNavigate();
    const {logOut} = useFirebase();
    const [error, setError] = useState(null);

    const handleSubmit = async () =>{

      try{
        await logOut()
        navigate("/Login")
      } catch {
        setError("An error occurred while Signing Out")
      }
    }


    return (
    <>
     {/* <div className="grid grid-cols-3 gap-2 items-center">
       <div>Hello world!</div>
       <div>Hello world!</div>
       <div>
         <ExpenseForm />
       </div>
    </div> */}

    <div>Dashboard</div>
    <h1>Click the button below:</h1>
    <button onClick={handleSubmit}>Sign Out</button>
    <div className="bg-background min-h-screen">
      <Navbar isWelcome={false} />
      <ExpenseForm />
      <ExpenseList />
    </div>
    </>
  )
}
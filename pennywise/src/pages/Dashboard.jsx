import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFirebase } from "../context/firebase"

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
    <div>Dashboard</div>
    <h1>Click the button below:</h1>
    <button onClick={handleSubmit}>Sign Out</button>
    </>
  )
}
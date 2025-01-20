import { Navigate } from "react-router-dom";
import { useFirebase } from "../context/firebase";

const PublicRoute = ({ children }) => {
  const { currentUser } = useFirebase();

  return !currentUser ? children : <Navigate to="/dashboard" />;
};

export { PublicRoute };

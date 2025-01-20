import { Navigate } from "react-router-dom";
import { useFirebase } from "../context/firebase";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useFirebase();

  return currentUser ? children : <Navigate to="/login" />;
};

export { ProtectedRoute };

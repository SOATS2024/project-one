import { Navigate } from "react-router-dom";
import { useFirebase } from "../context/firebase";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useFirebase();

  return currentUser ? children : <Navigate to="/login" />;
};
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ProtectedRoute };

import { Navigate } from "react-router-dom";
import { useFirebase } from "../context/firebase";
import PropTypes from "prop-types";

const PublicRoute = ({ children }) => {
  const { currentUser } = useFirebase();

  return !currentUser ? children : <Navigate to="/dashboard" />;
};
PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PublicRoute };

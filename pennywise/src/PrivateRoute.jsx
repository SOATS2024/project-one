import { Navigate } from "react-router-dom";
import { useFirebase } from "./context/firebase";

const PrivateRoute = ({children}) => {
    const {currentUser} = useFirebase();

    return currentUser ? children : <Navigate to='/login'/>
};

export default PrivateRoute;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Welcome from "./pages/Welcome.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Welcome />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
        path="/dashboard"element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }></Route>
      </Routes>
    </Router>
  );
}

export default App;

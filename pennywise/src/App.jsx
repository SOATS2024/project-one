import { Welcome } from "./pages/Welcome";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";
import { PasswordReset } from "./pages/PasswordReset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { PublicRoute } from "./routes/PublicRoute";
import { ContactUs } from "./components/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <PublicRoute>
              <Welcome />
            </PublicRoute>
          }
        />
        {/* Public Routes */}
        <Route
          path="/contact"
          element={
            <PublicRoute>
              <ContactUs />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/password-reset"
          element={
            <PublicRoute>
              <PasswordReset />
            </PublicRoute>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

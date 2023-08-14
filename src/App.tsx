import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./pages/Form";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import PDMRoom from "./pages/PDMRoom";
import RequireAuth from "./components/ProtectedRoute";
import PDMDetails from "./pages/PDMDetails";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/registration-form" element={<Form />} />
          <Route path="/pdm-rooms" element={<PDMRoom />} />
          <Route path="/pdm-rooms/:id" element={<PDMDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

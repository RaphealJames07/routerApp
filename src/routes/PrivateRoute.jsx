import { Outlet } from "react-router";
import Login from "../pages/auth/Login";
// import Dashboard from "../pages/Dashboard";

const PrivateRoute = () => {
    const user = JSON.parse(localStorage.getItem("userData"));
    return user?.token ? <Outlet /> : <Login />;
};

export default PrivateRoute;

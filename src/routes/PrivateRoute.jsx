/* eslint-disable react/prop-types */
import {Navigate} from "react-router";

const PrivateRoute = ({element, children}) => {
    const user = JSON.parse(localStorage.getItem("userData"))
    console.log(user)
    return user?.token ? (
        children ? (
            <>{children}</>
        ) : (
            <>{element}</>
        )
    ) : (
        <Navigate to={"/login"} replace />
    );
};

export default PrivateRoute;

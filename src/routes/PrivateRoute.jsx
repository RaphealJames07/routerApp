/* eslint-disable react/prop-types */
import {Navigate} from "react-router";

const PrivateRoute = ({element, children}) => {
    // const user = localStorage.getItem("userData")
    const isLoggedIn = true;
    console.log(isLoggedIn);
    return isLoggedIn ===true ? (
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

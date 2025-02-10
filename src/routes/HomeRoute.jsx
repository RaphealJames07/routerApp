import {Outlet} from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HomeRoute = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default HomeRoute;

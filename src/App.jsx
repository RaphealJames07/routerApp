import Contact from "./pages/Contact";
import Home from "./pages/Home";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Shop from "./pages/Shop";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import HomeRoute from "./routes/HomeRoute";
import Login from "./pages/auth/Login";
import PrivateRoute from "./routes/PrivateRoute";
import PrivateOutlet from "./routes/PrivateOutlet";

const App = () => {
    const routes = createBrowserRouter([
        {
            path: "",
            element: <HomeRoute />,
            children: [
                {
                    path: "",
                    element: <Home />,
                },
                {
                    path: "/contact-us",
                    element: <Contact />,
                },
                {
                    path: "/shop",
                    element: <Shop />,
                },
                {
                    path: "/collection/:product_name",
                    element: <Collection />,
                },
                {
                    path: "/about",
                    element: <About />,
                },

                {
                    path: "/cart",
                    element: <Cart />,
                },
            ],
        },
        {
            path: "/",
            element: (
                <PrivateRoute>
                    <PrivateOutlet />
                </PrivateRoute>
            ),
            children: [
                {
                    path: "/dashboard",
                    element: <Dashboard />,
                },
            ],
        },
        {
            path: "/login",
            element: <Login />,
        },
    ]);
    return <RouterProvider router={routes} />;
};

export default App;

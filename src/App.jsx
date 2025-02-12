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
import ShopOne from "./pages/ShopOne";
import ShopTwo from "./pages/ShopTwo";
import PrivateRoute from "./routes/PrivateRoute";
import Database from "./pages/Database";
import ProductDetail from "./pages/ProductDetail";

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
                    children: [
                        {
                            path: "shop-1",
                            element: <ShopOne />,
                        },
                        {
                            path: "shop-2",
                            element: <ShopTwo />,
                        },
                    ],
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
                    path: "/tour/:id",
                    element: <ProductDetail />,
                },

                {
                    path: "/cart",
                    element: <Cart />,
                },
            ],
        },
        {
            path: "/dashboard",
            element: <PrivateRoute />,
            children:[
                {
                    path:'dashboard',
                    element:<Dashboard/>
                },
                {
                    path:'database',
                    element:<Database/>
                }
            ]
        },
        {
            path: "/login",
            element: <Login />,
        },
    ]);
    return <RouterProvider router={routes} />;
};

export default App;

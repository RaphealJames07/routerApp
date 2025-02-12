import {FaShoppingCart, FaUser} from "react-icons/fa";
import {NavLink, useNavigate} from "react-router";
import { EgbujContext } from "../global/ContextProvider";
import { useContext } from "react";

const Header = () => {
    const navigate = useNavigate();
    const handlBackToHome = () => {
        console.log("Gone!!");
        setTimeout(() => {
            navigate(`/collection/${data[4]}`);
        }, 3000);
    };

    const data = ["nike", "adidas", "new-balance", "yeezy", "puma", "asics"];
// const count = 1
const {samuel} = useContext(EgbujContext)
    return (
        <div className="w-full h-16 bg-sky-400 flex items-center justify-between px-14">
            <div
                className="w-max h-max text-2xl font-semibold cursor-pointer"
                onClick={handlBackToHome}
            >
                Logo
            </div>
            <nav className="w-max h-max flex">
                <ul className="w-max h-max flex gap-6 list-none">
                    <NavLink to={"/"}>
                        <li className="cursor-pointer transition-all duration-500 hover:text-gray-500">
                            Home
                        </li>
                    </NavLink>
                    <NavLink to={"/shop"}>
                        <li className="cursor-pointer transition-all duration-500 hover:text-gray-500">
                            Shop
                        </li>
                    </NavLink>
                    <NavLink to={`/collection/${data[1]}`}>
                        <li className="cursor-pointer transition-all duration-500 hover:text-gray-500">
                            Collection
                        </li>
                    </NavLink>
                    <NavLink to={"/about"}>
                        <li className="cursor-pointer transition-all duration-500 hover:text-gray-500">
                            About
                        </li>
                    </NavLink>
                    <NavLink to={"/contact-us"}>
                        <li className="cursor-pointer transition-all duration-500 hover:text-gray-500">
                            Contact
                        </li>
                    </NavLink>
                </ul>
            </nav>
            <div className="w-max h-max flex gap-10">
                <FaUser
                    size={24}
                    className="cursor-pointer"
                    onClick={() => navigate("/dashboard")}
                />
                <span>
                    <FaShoppingCart size={24} className="cursor-pointer" />
                    {samuel}
                </span>
            </div>
        </div>
    );
};

export default Header;

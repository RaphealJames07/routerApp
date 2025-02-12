import {useState} from "react";
import imageClass from "../../assets/pexels-didsss-2675061.jpg";
import {toast} from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
const Login = () => {
    const [email, setEmail] = useState("james2@gmail.com");
    const navigate = useNavigate()
    const [password, setPassword] = useState("Password1$");
    // const fullName = "ELvis Udoka";
    const url = "https://movie-app-ch5.onrender.com/api/user/log-in";
    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email && !password) {
            return toast.error("Enter credentials");
        }
        try {
            const response = await axios.post(url, {email, password});
            console.log(response);
            if(response?.status === 200){
                localStorage.setItem(
                    "userData",
                    JSON.stringify(response?.data?.data)
                );
                navigate('/dashboard')
            }
            toast.success(response?.data?.message);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="w-full h-screen flex">
            <div className="w-[60%] h-full bg-sky-200">
                <img
                    src={imageClass}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="w-[40%] h-full flex flex-col gap-8 p-8">
                <div className="w-full h-40 flex items-center justify-center">
                    <p className="font-semibold text-3xl ">Login</p>
                </div>
                <div className="w-full h-[calc(100%-10rem)] flex flex-col items-center  gap-4">
                    <div className="w-full h-max">
                        <p>Email</p>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                            className="w-full h-10 rounded border outline-none border-gray-300 pl-2 text-sm"
                        />
                    </div>
                    <div className="w-full h-max">
                        <p>Password</p>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            className="w-full h-10 rounded border outline-none border-gray-300 pl-2 text-sm"
                        />
                    </div>
                    <button
                        className="w-full h-12 rounded font-semibold text-sm bg-amber-600 cursor-pointer"
                        onClick={handleLogin}
                    >
                        LOGIN
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;

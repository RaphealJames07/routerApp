import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";

const ShopOne = () => {
    const url = "https://trippyapiv1.onrender.com/trippy/find-tours";
    const [tours, setTours] = useState([]);

    const handleGetAllTours = async () => {
        try {
            const response = await axios.get(url);
            console.log(response);
            setTours(response?.data?.tours);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        handleGetAllTours();
    }, []);

    const nav = useNavigate();
    const handleNavToDetail = (id) => {
        nav(`/tour/${id}`);
    };

    return (
        <div className="w-full h-max bg-fuchsia-300 p-2 flex flex-col items-center gap-4">
            <p className="text-3xl font-semibold">Shop One</p>
            <div className="w-full h-max flex gap-6 flex-wrap">
                {tours.map((item, index) => (
                    <div
                        className="w-40 h-40 rounded bg-white "
                        onClick={() => handleNavToDetail(item?._id)}
                        key={index}
                    >
                        <div className="w-full h-1/2">
                            <img
                                src={item?.images[2]}
                                alt=""
                                className="w-full h-full"
                            />
                        </div>
                        <div className="w-full h-1/2">
                            <p>Tour name: {item?.tourName}</p>
                            <p>Tour price: ${item?.pricePerPerson}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopOne;

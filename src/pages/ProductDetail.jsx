import axios from "axios";
import { useEffect, useState } from "react";
import {useParams} from "react-router";

const ProductDetail = () => {
    const {id} = useParams();

    const url = `https://trippyapiv1.onrender.com/trippy/findone-tour/${id}`
    const [tour, setTour] = useState({});

    const getSingleTour = async () => {
        try {
            const response = await axios.get(url);
            console.log(response);
            setTour(response?.data?.tour);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getSingleTour();
    }, []);
    return (
        <div className="w-full h-screen">
            <div className="w-full h-1/2 border-b border-gray-400">Tour Image</div>
            <div className="w-full h-1/2 ">
                <p>Tour Name: {tour.tourName}</p>
                <p>Tour City : {tour.city}</p>
                <p>Tour Country : {tour.country}</p>
                <p>Tour Info : {tour.info}</p>
                <p>Tour Price : {tour.pricePerPerson}</p>
                <p>Tour Rating : {tour.starRating}</p>
            </div>
        </div>
    );
};

export default ProductDetail;

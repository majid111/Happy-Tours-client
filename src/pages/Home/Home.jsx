import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Banner from "./Banner";
import TouristsSpot from "./TouristsSpot";
import Slider from "./Slider";
import Offer from "./Offer";
import Review from "./Review";
const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <TouristsSpot></TouristsSpot>
            <Slider></Slider>
            <Offer></Offer>
            <Review></Review>
            <h2 className="text-3xl font-poppins">This is home</h2>
            
            
        </div>
    );
};

export default Home;
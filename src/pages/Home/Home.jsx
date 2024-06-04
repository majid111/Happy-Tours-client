import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import TouristsSpot from "./TouristsSpot";
import Slider from "./Slider";
import Offer from "./Offer";
import Review from "./Review";
import Countries from "./Countries";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const countrys = useLoaderData();
  const [touristsSpot, setTouristsSpot] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/happyTours")
      .then((result) => result.json())
      .then((data) => setTouristsSpot(data));
  }, []);


  return (
    <div className="space-y-12">
        <Helmet>
            <title>Happy-Tours | Home</title>
        </Helmet>
      <Banner></Banner>
      <section>
        <h2 className="text-3xl text-center mb-12 font-bold">Tourists Spot</h2>
        <div className="grid gap-10 ">
            {
                touristsSpot.map(spot=><TouristsSpot key={spot._id} spot={spot}></TouristsSpot>)
            }
        </div>
      </section>
      <Slider></Slider>
      <Offer></Offer>
      <section>
        <h2 className="text-3xl text-center mb-12 font-bold">Countries</h2>
        <div className="grid  gap-10 md:grid-cols-2 lg:grid-cols-3">
            {
                countrys.map(country=><Countries key={country._id} country={country}></Countries>)
            }
        </div>
      </section>
      <Review></Review>
      <h2 className="text-3xl font-poppins">This is home</h2>
    </div>
  );
};

export default Home;

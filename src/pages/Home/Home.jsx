import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import TouristsSpot from "./TouristsSpot";
import Slider from "./Slider";
import Review from "./Review";
import Countries from "./Countries";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const countrys = useLoaderData();
  const [touristsSpot, setTouristsSpot] = useState([]);
  const touristsSpot6= touristsSpot.length>6? touristsSpot.slice(0,6):touristsSpot;

  useEffect(() => {
    fetch("https://happy-tours-server.vercel.app/happyTours")
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
        <div id="tours" className="grid gap-10 ">
            {
                touristsSpot6.map(spot=><TouristsSpot key={spot._id} spot={spot}></TouristsSpot>)
            }
            <div className="mx-auto">
            <Link to="/allTouristsSpot"><button className="btn bg-[#23BE0A] text-white">View More</button></Link>
            </div>
        </div>
      </section>
      <Slider></Slider>
      <section>
        <h2 className="text-3xl text-center mb-12 font-bold">Countries</h2>
        <div className="grid  gap-10 md:grid-cols-2 lg:grid-cols-3">
            {
                countrys.map(country=><Countries key={country._id} country={country}></Countries>)
            }
        </div>
      </section>
      <Review></Review>
    </div>
  );
};

export default Home;

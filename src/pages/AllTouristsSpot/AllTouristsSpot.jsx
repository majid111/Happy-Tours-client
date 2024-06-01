import { useState } from "react";
import TouristSpotCard from "../TouristsSpotCard/TouristSpotCard";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AllTouristsSpot = () => {
    const loadedtouristsSpots = useLoaderData();
  const [touristsSpots, setTouristsSpots] = useState(loadedtouristsSpots);
  console.log(touristsSpots);
  return (
    <div>
      <Helmet>
        <title>Happy Tours | All Tourists Spot</title>
      </Helmet>
      <h2 className="text-3xl text-blue-700 font-extrabold">
        This is home {touristsSpots.length}{" "}
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {touristsSpots.map((touristsSpot) => (
          <TouristSpotCard
            key={touristsSpot._id}
            touristsSpots={touristsSpots}
            setTouristsSpots={setTouristsSpots}
            touristsSpot={touristsSpot}
          ></TouristSpotCard>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSpot;
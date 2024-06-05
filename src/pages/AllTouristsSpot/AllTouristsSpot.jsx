import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import TouristsSpot from "../Home/TouristsSpot";

const AllTouristsSpot = () => {
  const touristsSpots = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Happy Tours | All Tourists Spot</title>
      </Helmet>
      <h2 className="text-3xl text-blue-700 font-extrabold">
        This is home {touristsSpots.length}{" "}
      </h2>
      <div className="grid  gap-4">
        {touristsSpots.map((spot) => (
          <TouristsSpot key={spot._id} spot={spot}></TouristsSpot>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSpot;

import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "../TouristsSpotCard/TouristSpotCard";

const MyList = () => {
    const loadedData = useLoaderData();
    const { user } = useContext(AuthContext);
    const { email } = user;
    const myList = loadedData.filter((data) => data.email === email);
    const [touristsSpots, setTouristsSpots] = useState(myList);

  return (
    <div>
      <Helmet>
        <title>Happy Tours | My List</title>
      </Helmet>
      <div>
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

export default MyList;

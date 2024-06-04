import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const TouristsSpotDetails = () => {
    const touristSpot = useLoaderData();
    const {
        photoUrl,
        touristsSpotName,
        countryName,
        location,
        shortDescription,
        averageCost,
        seasonality,
        travelTime,
        totaVisitorsPerYear,
        email,
        userName,
      } = touristSpot;
    
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mb-10 p-4">
        <Helmet>
            <title>Happy-Tours | Spot Details</title>
        </Helmet>
        <figure>
          <img className="w-64" src={photoUrl} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{touristsSpotName}</h2>
          <p className="p-3">Location: {location}</p>
          <p className="p-3">Country Name: {countryName}</p>
          <p className="p-3">Average Cost: {averageCost}</p>
          <p className="p-3">Seasionality: {seasonality}</p>
          <p className="p-3">Travel Time: {travelTime}</p>
          <p className="p-3">Total Visitors Per Year: {totaVisitorsPerYear}</p>
          <p className="p-3">Short Description: {shortDescription}</p>
          <div className="flex gap-6">
            <p className="text-lg font-bold">Author Name: {userName}</p>
            <p>Author Email: {email}</p>
          </div>
        </div>
      </div>
    );
};

export default TouristsSpotDetails;
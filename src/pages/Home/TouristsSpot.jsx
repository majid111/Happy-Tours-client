import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TouristsSpot = ({ spot }) => {
  const {
    _id,
    photoUrl,
    touristsSpotName,
    countryName,
    location,
    shortDescription,
    averageCost,
  } = spot;
  return (
    <div className="hero  bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img className="max-w-80" src={photoUrl} />
        <div>
          <h1 className="text-3xl font-bold">{touristsSpotName}</h1>
          <p className="py-3">{countryName}</p>
          <p className="py-3">{location}</p>
          <p className="py-3">{averageCost}</p>
          <p className="py-3">{shortDescription}</p>
          <Link to={`/allTouristsSpot/${_id}`}>
            <button className="btn btn-primary">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

TouristsSpot.propTypes = {
  spot: PropTypes.object,
};

export default TouristsSpot;

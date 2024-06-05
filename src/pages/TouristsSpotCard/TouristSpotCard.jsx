import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TouristSpotCard = ({ touristsSpot, touristsSpots, setTouristsSpots }) => {
  const {
    _id,
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
  } = touristsSpot;


  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(_id);
        fetch(
          `https://happy-tours-server.vercel.app/happyTours/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Tourists Spot has been deleted.",
                icon: "success",
              });
              const remaining = touristsSpots.filter((spot) => spot._id !== _id);
              setTouristsSpots(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mb-10 p-4">
      <figure>
        <img className="w-64" src={photoUrl} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{touristsSpotName}</h2>
        <div className="flex gap-6">
          <p>Author Name: {userName}</p>
          <p>Author Email: {email}</p>
        </div>
        <p>Location: {location}</p>
        <p>Country Name: {countryName}</p>
        <p>Average Cost: {averageCost}</p>
        <p>Seasionality: {seasonality}</p>
        <p>Travel Time: {travelTime}</p>
        <p>Total Visitors Per Year: {totaVisitorsPerYear}</p>
        <p>Short Description: {shortDescription}</p>
        <div className="card-actions gap-6">
          
          <Link to={`/allTouristsSpot/${_id}`}>
            <button className="btn btn-primary">View</button>
          </Link>
          <Link to={`/updateTouristsSpot/${_id}`}>
            <button className="btn btn-primary">Edit</button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn btn-primary">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

TouristSpotCard.propTypes = {
  touristsSpot:PropTypes.object,
  touristsSpots:PropTypes.array,
  setTouristsSpots:PropTypes.func,
  _id:PropTypes.string,
  photoUrl:PropTypes.string,
  touristsSpotName:PropTypes.string,
  countryName:PropTypes.string,
  location:PropTypes.string,
  shortDescription:PropTypes.string,
  averageCost:PropTypes.string,
  seasonality:PropTypes.string,
  travelTime:PropTypes.string,
  totaVisitorsPerYear:PropTypes.string,
  email:PropTypes.string,
  userName:PropTypes.string,
};

export default TouristSpotCard;

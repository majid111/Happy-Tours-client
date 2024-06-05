import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AddTouristsSpot = () => {
  const handleAddTouristsSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const touristsSpotName = form.touristsSpotName.value;
    const countryName = form.countryName.value;
    const location = form.location.value;
    const averageCost = form.averageCost.value;
    const seasonality = form.seasonality.value;
    const travelTime = form.travelTime.value;
    const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
    const email = form.email.value;
    const userName = form.userName.value;
    const shortDescription = form.shortDescription.value;
    const photoUrl = form.photo.value;
    const newTouristsSpot = {
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
    };
    console.log(newTouristsSpot);

    //send data to the server
    fetch("https://happy-tours-server.vercel.app/happyTours", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTouristsSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Successfully data added",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className=" mx-6 bg-[#F4F3F0] p-6">
      <Helmet>
        <title>Happy Tours | Add Tourists Spot</title>
      </Helmet>
      <h2 className="mb-6">Add a Tourists Spot</h2>
      <form onSubmit={handleAddTouristsSpot}>
        <div className=" md:flex gap-6">
          <div className="w-full">
            <label>Tourists Spot Name</label>
            <input
              className="grow input input-bordered flex items-center gap-2 w-full"
              type="text"
              name="touristsSpotName"
              placeholder="Enter tourists spot name"
            />
          </div>
          <div className="w-full">
            <label>Country Name</label>
            <input
              className="grow input input-bordered flex items-center gap-2 w-full"
              type="text"
              name="countryName"
              placeholder="Enter country name"
            />
          </div>
        </div>
        <div className=" md:flex gap-6">
          <div className="w-full">
            <label>Location</label>
            <input
              className="grow input input-bordered flex items-center gap-2 w-full"
              type="text"
              name="location"
              placeholder="Enter location"
            />
          </div>
          <div className="w-full">
            <label>Average Cost</label>
            <input
              className="grow input input-bordered flex items-center gap-2 w-full"
              type="text"
              name="averageCost"
              placeholder="Enter average cost"
            />
          </div>
        </div>
        <div className=" md:flex gap-6">
          <div className="w-full">
            <label>Seasonality</label>
            <input
              className="grow input input-bordered flex items-center gap-2 w-full"
              type="text"
              name="seasonality"
              placeholder="like- Summer,Winter"
            />
          </div>
          <div className="w-full">
            <label>Travel Time</label>
            <input
              className="grow input input-bordered flex items-center gap-2 w-full"
              type="text"
              name="travelTime"
              placeholder="like - 3days, 7days"
            />
          </div>
        </div>
        <div className=" md:flex gap-6">
          <div className="w-full">
            <label>Total Visitors per Year</label>
            <input
              className="grow input input-bordered flex items-center gap-2 w-full"
              type="text"
              name="totaVisitorsPerYear"
              placeholder="Enter Total visitors per year"
            />
          </div>
          <div className="w-full">
            <label>User Email</label>
            <input
              className="grow input input-bordered flex items-center gap-2 w-full"
              type="text"
              name="email"
              placeholder="Enter Email"
            />
          </div>
        </div>
        <div className=" md:flex gap-6">
          <div className="w-full">
            <label>User Name</label>
            <input
              className="grow input input-bordered flex items-center gap-2 w-full"
              type="text"
              name="userName"
              placeholder="Enter User Name"
            />
          </div>
          <div className="w-full">
            <label>Photo URL</label>
            <input
              className="grow input input-bordered flex items-center gap-2 w-full"
              type="text"
              name="photo"
              placeholder="Enter Photo URL"
            />
          </div>
        </div>
        <div className=" md:flex gap-6">
          <div className="w-full">
            <label>Short Description</label>
            <input
              className="grow input input-bordered flex items-center gap-2 w-full"
              type="text"
              name="shortDescription"
              placeholder="Enter short description"
            />
          </div>
        </div>
        <div className=" md:flex gap-6">
          <input
            type="submit"
            value="Add Tourists Spot"
            className="btn w-full text-center mt-6 bg-[#D2B48C] border-[#331A15] border-2"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default AddTouristsSpot;

import { useLoaderData } from "react-router-dom";

const CountrySpots = () => {
  const countryTouristsSpot = useLoaderData();
  return <div>data loaded: {countryTouristsSpot.length}</div>;
};

export default CountrySpots;

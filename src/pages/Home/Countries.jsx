import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Countries = ({ country }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/countries/${name}`);
  };
  const { image_url, name, capital, description } = country;
  return (
    <div
      onClick={handleClick}
      className="card card-compact w-96 bg-base-100 shadow-xl"
    >
      <figure>
        <img src={image_url} alt={`image of ${name}`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-lg">{capital}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

Countries.propTypes = {
  country: PropTypes.object,
};

export default Countries;

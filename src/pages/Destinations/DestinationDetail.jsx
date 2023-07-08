import { useParams } from "react-router-dom";
import { getDetails } from "../../utils/utilFunctions";
import { data } from "../../data/data";

export const DestinationDetail = () => {
  const { continentName, countryName, destinationName } = useParams();
  const continent = getDetails(data.continents, continentName);
  const country = getDetails(continent.countries, countryName);
  const {
    name,
    description,
    image,
    ratings,
    reviews,
    location,
    openingHours,
    ticketPrice,
    website,
  } = getDetails(country.destinations, destinationName);
  return (
    <div className="align-left">
      <h1 className="align-center">{name}</h1>
      <div className="flex-2 padding">
        <img src={image} alt={name} />
        <div className="">
          <p>
            <span className="bold purple-color">Description:</span>{" "}
            {description}
          </p>
          <p>
            <span className="bold purple-color">Ratings:</span> {ratings}
          </p>
          <p>
            <span className="bold purple-color">Reviews:</span> {reviews}
          </p>
          <p>
            <span className="bold purple-color">Location:</span> {location}
          </p>
          <p>
            <span className="bold purple-color">Opening Hours:</span>{" "}
            {openingHours}
          </p>
          <p>
            <span className="bold purple-color">Ticket Price:</span>{" "}
            {ticketPrice}
          </p>
          <p>
            <a href={website} target="_blank" rel="noreferrer">
              Website
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

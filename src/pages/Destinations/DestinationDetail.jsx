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
    <div>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <p>{description}</p>
      <p>Ratings: {ratings}</p>
      <p>Reviews: {reviews}</p>
      <p>Location: {location}</p>
      <p>Opening Hours: {openingHours}</p>
      <p>Ticket Price: {ticketPrice}</p>
      <p>
        <a href={website} target="_blank" rel="noreferrer">
          Website
        </a>
      </p>
    </div>
  );
};

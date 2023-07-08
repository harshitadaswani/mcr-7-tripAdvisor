import { Link, useParams } from "react-router-dom";
import { data } from "../../data/data";
import { getDetails } from "../../utils/utilFunctions";
import CardComponent from "../../components/Card";

export const DestinationCategory = () => {
  const { continentName, countryName } = useParams();
  const continent = getDetails(data.continents, continentName);
  const country = getDetails(continent.countries, countryName);
  return (
    <div>
      <h2>Top Countries in {country.name} for your next holiday</h2>
      <div className="flex-2">
        {country.destinations.map((destination) => (
          <div key={destination.id}>
            <Link to={`/${continentName}/${countryName}/${destination.name}`}>
              <CardComponent {...destination} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

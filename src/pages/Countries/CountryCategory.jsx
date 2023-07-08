import { Link, useParams } from "react-router-dom";
import { data } from "../../data/data";
import CardComponent from "../../components/Card";
import { getDetails } from "../../utils/utilFunctions";

export const CountryCategory = () => {
  const { continentName } = useParams();
  const { continents } = data;
  const continent = getDetails(continents, continentName);
  return (
    <div>
      <h2>Top Countries in {continent.name} for your next holiday</h2>
      <div className="flex">
        {continent.countries.map((country) => (
          <div key={country.id}>
            <Link to={`/${continentName}/${country.name}`}>
              <CardComponent {...country} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

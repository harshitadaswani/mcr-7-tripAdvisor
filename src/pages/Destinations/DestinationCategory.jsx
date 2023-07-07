import { Link, useParams } from "react-router-dom";
import { data } from "../../data/data";
import { getDetails } from "../../utils/utilFunctions";
import Stack from "@mui/joy/Stack";
import CardComponent from "../../components/Card";

export const DestinationCategory = () => {
  const { continentName, countryName } = useParams();
  const continent = getDetails(data.continents, continentName);
  const country = getDetails(continent.countries, countryName);
  console.log(country);
  return (
    <div>
      <h1>Top Countries in {country.name} for your next holiday</h1>
      <Stack
        //   direction="row"
        //   spacing={10}
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 0, sm: 2, md: 4 }}
        // spacing={2}
        flexWrap="wrap"
      >
        {country.destinations.map((destination) => (
          <div key={destination.id}>
            <Link
              to={`/continents/${continentName}/${countryName}/${destination.name}`}
            >
              <CardComponent {...destination} />
            </Link>
          </div>
        ))}
      </Stack>
    </div>
  );
};

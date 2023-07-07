import { Link, useParams } from "react-router-dom";
import { data } from "../../data/data";
import Stack from "@mui/joy/Stack";
import CardComponent from "../../components/Card";
import { getDetails } from "../../utils/utilFunctions";

export const CountryCategory = () => {
  const { continentName } = useParams();
  const { continents } = data;
  const continent = getDetails(continents, continentName);
  return (
    <div>
      <h1>Top Countries in {continent.name} for your next holiday</h1>
      <Stack
        //   direction="row"
        //   spacing={10}
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 0, sm: 2, md: 4 }}
        // spacing={2}
        flexWrap="wrap"
      >
        {continent.countries.map((country) => (
          <div key={country.id}>
            <Link to={`/continents/${continentName}/${country.name}`}>
              <CardComponent {...country} />
            </Link>
          </div>
        ))}
      </Stack>
    </div>
  );
};

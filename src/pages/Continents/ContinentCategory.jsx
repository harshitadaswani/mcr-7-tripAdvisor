import CardComponent from "../../components/Card";
import { data } from "../../data/data";
import { Link } from "react-router-dom";
import Stack from "@mui/joy/Stack";

export const ContinentCategory = () => {
  const { continents } = data;
  return (
    <div>
      <h1>Top Continents for your next holiday</h1>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 0, sm: 2, md: 4 }}
        // spacing={2}
        flexWrap="wrap"
      >
        {continents.map((continent) => (
          <div key={continent.id}>
            <Link to={`/continents/${continent.name}`}>
              <CardComponent {...continent} />
            </Link>
          </div>
        ))}
      </Stack>
    </div>
  );
};

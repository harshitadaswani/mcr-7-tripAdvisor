import CardComponent from "../../components/Card";
import { data } from "../../data/data";
import { Link } from "react-router-dom";

export const ContinentCategory = () => {
  const { continents } = data;
  return (
    <div>
      <h2 className="purple-color">Top Continents for your next holiday</h2>
      <div className="flex">
        {continents.map((continent) => (
          <div key={continent.id}>
            <Link to={`/${continent.name}`}>
              <CardComponent {...continent} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

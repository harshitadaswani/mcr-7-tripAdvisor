import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import {
  Error,
  ContinentCategory,
  CountryCategory,
  DestinationCategory,
  DestinationDetail,
} from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ContinentCategory/>,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/:continentName",
    element: <CountryCategory />,
  },
  {
    path: "/:continentName/:countryName",
    element: <DestinationCategory />,
  },
  {
    path: "/:continentName/:countryName/:destinationName",
    element: <DestinationDetail />,
  },
]);

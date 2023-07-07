import { createBrowserRouter } from "react-router-dom";
import App from "../App";
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
    element: <App />,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/continents",
    element: <ContinentCategory />,
  },
  {
    path: "/continents/:continentName",
    element: <CountryCategory />,
  },
  {
    path: "/continents/:continentName/:countryName",
    element: <DestinationCategory />,
  },
  {
    path: "/continents/:continentName/:countryName/:destinationName",
    element: <DestinationDetail />,
  },
]);

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {
  Error,
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

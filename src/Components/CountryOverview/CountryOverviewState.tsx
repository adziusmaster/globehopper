import { HttpResult } from "widgets-for-react";
import { Routes } from "../../App";
import { Country, CountryState } from "../CountryPicker/CountryState";

export type CountryOverviewProps = {
  currentRoute: Routes;
  allCountries: Country[];
  NotVisitedCountries: Country[];
  WishlistCountries: Country[];
  FavoritesCountries: Country[];
  VisitedCountries: Country[];
  kindOfResult: string;
  addToVisited: (country: Country) => void;
  addOneVisit: (country: Country) => void;
};

export type CountriesProps = {
  countries: Country[];
  addToVisited: (country: Country) => void;
  addOneVisit: (country: Country) => void;
};

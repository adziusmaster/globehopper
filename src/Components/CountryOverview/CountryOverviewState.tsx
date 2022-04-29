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
  addToFavourites: (country: Country) => void;
};

export type CountriesProps = {
  countries: Country[];
  addToFavourites: (country: Country) => void;
};

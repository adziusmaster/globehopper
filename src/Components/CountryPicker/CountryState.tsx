import { BooleanLiteral } from "typescript";
import { AsyncState, HttpResult } from "widgets-for-react";
import { AppState, Routes } from "../../App";

export type Country = {
  name: {
    common: string;
    official: string;
  };
  continents: Continent;
  flags: {
    png: string;
    svg: string;
  };
  howManyVisits: number;
  favourites: boolean;
  wishList: boolean;
};

export type CountryState = {
  country: AsyncState<Country[]>;
};

export type Continent = string;
export const allContinents: Continent[] = [
  "All",
  "Africa",
  "Asia",
  "Europe",
  "South America",
  "North America",
  "Oceania",
  "Antarctica",
];

export type CountrySelectorProps = {
  currentRoute: Routes;
  allCountries: Country[];
  NotVisitedCountries: Country[];
  WishlistCountries: Country[];
  FavoritesCountries: Country[];
  VisitedCountries: Country[];
  CountriesLoaded: (allCountries: Country[]) => void;
  addToVisited: (country: Country) => void;
  removeFromVisited: (country: Country) => void;
  addToFavourites: (country: Country) => void;
  removeFromFavourites: (country: Country) => void;
  addToWishList: (country: Country) => void;
  removeFromWishList: (country: Country) => void;
};

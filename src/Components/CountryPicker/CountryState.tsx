import { AsyncState } from "widgets-for-react";
import { Routes } from "../EventHandlers/EventHandlers";

export type Country = {
  name: {
    common: string;
    official: string;
  };
  cca3: string; // Abbrevation
  continents: Continent;
  flags: {
    png: string;
    svg: string;
  };
  howManyVisits: number;
  favourited: boolean;
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
  FavoritedCountries: Country[];
  VisitedCountries: Country[];
  CountriesLoaded: (allCountries: Country[]) => void;
  addToVisited: (country: Country) => void;
  removeFromVisited: (country: Country) => void;
  addToFavourites: (country: Country) => void;
  removeFromFavourites: (country: Country) => void;
  addToWishList: (country: Country) => void;
  removeFromWishList: (country: Country) => void;
};

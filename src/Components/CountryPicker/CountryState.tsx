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
  // onChangeCountry: (country: Country) => void;
  // onChangeContinent: (continent: Continent) => void;
  // onMakeCountryVisited: (country: Country) => void;
  // onMakeCountryLiked: (country: Country) => void;
  // onPlusLike: (country: Country) => void;
  // onMinusLike: (country: Country) => void;
  // onSortOn: (e: React.ChangeEvent<HTMLInputElement>) => void;
  currentRoute: Routes;
  allCountries: Country[];
  NotVisitedCountries: Country[];
  WishlistCountries: Country[];
  FavoritesCountries: Country[];
  VisitedCountries: Country[];
  CountriesLoaded: (allCountries: Country[]) => void;
  addToFavourites: (country: Country) => void;
  addOneVisit: (country: Country) => void;
  // onClearFilter: () => void;
  // onClearSearch: () => void;
  // selectedContinent: Continent;
  // searchedName: string;
  // allCountries: Country[];
};

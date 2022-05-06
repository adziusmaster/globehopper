import { AsyncState } from "widgets-for-react";
import { Routes } from "../EventHandlers/EventHandlers";

export type CountryBase = {
  name: {
    common: string;
    official: string;
  };
  cca3: string; // Abbrevation
  continents: Continent[];
  flags: {
    png: string;
    svg: string;
  }
}

export type Country = CountryBase & {
  howManyVisits: number;
  favourited: boolean;
  wishList: boolean;
  modalVisible: boolean;
  parentCountry?: ParentCountry;
  governedBy?: string;
};

export type ParentCountry = CountryBase

export type SubCountries = {
  country: string,
  subCountries: Country[]
}

export type SplitCountries = {
  country: string,
  splitCountries: CountryBase[]
}

export type GovernedCountries = {
  country: string,
  parentCountry: string;
  description: string;
}

export type CountryState = {
  country: AsyncState<Country[]>;
};

export type Continent = string;
export const allContinents: Continent[] = [
  "All",
  "Africa",
  "Antarctica",
  "Asia",
  "Europe",
  "North America",
  "Oceania",
  "South America",
];

export type CountrySelectorProps = {
  currentRoute: Routes;
  allCountries: Country[];
  NotVisitedCountries: Country[];
  WishlistCountries: Country[];
  FavoritedCountries: Country[];
  VisitedCountries: Country[];
  selectedContinent: Continent;
  searchedName: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  onClearSearch: () => void;
  CountriesLoaded: (allCountries: Country[]) => void;
  addToVisited: (country: Country) => void;
  removeFromVisited: (country: Country) => void;
  addToFavourites: (country: Country) => void;
  removeFromFavourites: (country: Country) => void;
  addToWishList: (country: Country) => void;
  removeFromWishList: (country: Country) => void;
  showModal: (country: Country) => void;
};

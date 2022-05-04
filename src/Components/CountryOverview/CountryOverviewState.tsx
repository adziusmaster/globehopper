import { Continent, Country } from "../CountryPicker/CountryState";
import { Routes } from "../EventHandlers/EventHandlers";

export type CountryOverviewProps = {
  currentRoute: Routes;
  allCountries: Country[];
  NotVisitedCountries: Country[];
  WishlistCountries: Country[];
  FavoritesCountries: Country[];
  VisitedCountries: Country[];
  kindOfResult: string;
  addToVisited: (country: Country) => void;
  removeFromVisited: (country: Country) => void;
  addToFavourites: (country: Country) => void;
  removeFromFavourites: (country: Country) => void;
  addToWishList: (country: Country) => void;
  removeFromWishList: (country: Country) => void;
  selectedContinent: Continent;
  showModal: (country: Country) => void;
};

export type CountriesProps = {
  countries: Country[];
  selectedContinent: Continent;
  searchedName: string;
  addToVisited: (country: Country) => void;
  removeFromVisited: (country: Country) => void;
  addToFavourites: (country: Country) => void;
  removeFromFavourites: (country: Country) => void;
  addToWishList: (country: Country) => void;
  removeFromWishList: (country: Country) => void;
  showModal: (country: Country) => void;
};

export type ModalProps = {
  id: string,
  showModal: (country: Country) => void;
  modalVisible: boolean;
  country: Country;
};

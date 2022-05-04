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
  modalVisible: boolean;
  showModal: () => void;
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
  modalVisible: boolean;
  showModal: () => void;
};

export type ModalProps = {
  showModal: () => void;
  modalVisible: boolean;
};

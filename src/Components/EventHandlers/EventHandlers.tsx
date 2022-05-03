import { Fun, Action } from "widgets-for-react";
import { Country } from "../CountryPicker/CountryState";

export type Routes =
  | "all"
  | "notVisited"
  | "wishList"
  | "favotites"
  | "visited";

export type AppState = {
  email: string;
  password: string;
  isLogged: boolean;
  currentRoute: Routes;
  allCountries: Country[];
  VisitedCountries: Country[];
  NotVisitedCountries: Country[];
  FavouritedCountries: Country[];
  WishlistCountries: Country[];
};

export const HandleLoadedCountries: Fun<Country[], Action<AppState>> =
  (countries: Country[]) => (state: AppState) => {
    let newState: AppState = {
      ...state,
      allCountries: countries,
      NotVisitedCountries: countries,
    };
    return newState;
  };

export const Router: Fun<Routes, Action<AppState>> =
  (route: Routes) => (state: AppState) => {
    return {
      ...state,
      currentRoute: route,
    };
  };

import { Fun, Action } from "widgets-for-react";
import { AppState } from "../../App";
import { Country } from "../CountryPicker/CountryState";

export type Routes =
  | "all"
  | "notVisited"
  | "wishList"
  | "favotites"
  | "visited";

export const HandleLoadedCountries: Fun<Country[], Action<AppState>> =
  (countries: Country[]) => (state: AppState) => {
    let newState: AppState = {
      ...state,
      allCountries: countries,
      NotVisitedCountries: [...countries],
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

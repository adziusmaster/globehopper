import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Country } from "./Components/CountryPicker/CountryState";
import { Action, fromJSX, Fun, stateful } from "widgets-for-react";
import { LoginWidget } from "./Components/Login/LoginWidget";
import { HeaderWidget } from "./Components/Header/HeaderWidget";
import CountryOverview from "./Components/CountryOverview/CountryOverviewWidget";
import CountryWidget from "./Components/CountryPicker/CountryWidget";
import NotVisitedCountries from "./Components/CountryOverview/NotVisitedCountries";

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
  NotVisitedCountries: Country[];
  WishlistCountries: Country[];
  FavoritesCountries: Country[];
  VisitedCountries: Country[];
};

export const HandleEmail: Fun<
  React.ChangeEvent<HTMLInputElement>,
  Action<AppState>
> = (event: React.ChangeEvent<HTMLInputElement>) => (state: AppState) => ({
  ...state,
  email: event.currentTarget.value,
});

export const HandlePassword: Fun<
  React.ChangeEvent<HTMLInputElement>,
  Action<AppState>
> = (event: React.ChangeEvent<HTMLInputElement>) => (state: AppState) => ({
  ...state,
  password: event.currentTarget.value,
});

export const HandleLogin: Action<AppState> = (state: AppState) => {
  if (state.email === "e" && state.password === "p") {
    return {
      ...state,
      isLogged: true,
    };
  } else
    return {
      ...state,
      isLogged: false,
    };
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

export const HandleAddToVisited: Fun<Country, Action<AppState>> =
  (country: Country) => (state: AppState) => {
    country.howManyVisits = 1;
    let newVisitedCountry = [country];
    let newState: AppState = { ...state };
    let foundCountry = state.VisitedCountries.find(
      (c) => c.name === country.name
    );
    if (foundCountry === undefined) {
      newState = {
        ...state,
        VisitedCountries: state.VisitedCountries.concat(newVisitedCountry),
        NotVisitedCountries: state.NotVisitedCountries.filter(
          (c) => c !== newVisitedCountry[0]
        ),
      };
    } else {
      let updatedCountries: Country[] = state.VisitedCountries;
      let index = state.VisitedCountries.indexOf(foundCountry);
      let updatedCountry: Country = {
        ...foundCountry,
        howManyVisits: foundCountry.howManyVisits + 1,
      };
      updatedCountries.splice(index, 1, updatedCountry);
      newState = {
        ...state,
        VisitedCountries: updatedCountries,
      };
    }

    return newState;
  };

export const Router: Fun<Routes, Action<AppState>> =
  (route: Routes) => (state: AppState) => {
    return {
      ...state,
      currentRoute: route,
    };
  };

const App = (): JSX.Element =>
  stateful<AppState>()((s0) =>
    fromJSX((setState: (_: Action<AppState>) => void) => (
      <>
        {!s0.isLogged ? (
          <>
            {LoginWidget({
              onEmail: (e) => setState((s0) => HandleEmail(e)(s0)),
              onPassword: (e) => setState((s0) => HandlePassword(e)(s0)),
              onLogin: () => setState((s0) => HandleLogin(s0)),
            })}
          </>
        ) : (
          <>
            {HeaderWidget({
              onVisited: () => setState((s0) => Router("visited")(s0)),
              onNotVisited: () => setState((s0) => Router("notVisited")(s0)),
              onWishList: () => setState((s0) => Router("wishList")(s0)),
              onFavorites: () => setState((s0) => Router("favotites")(s0)),
              onAll: () => setState((s0) => Router("all")(s0)),
              currentRoute: s0.currentRoute
            })}
            {CountryWidget({
              CountriesLoaded: (e) =>
                setState((s0) => HandleLoadedCountries(e)(s0)),
              currentRoute: s0.currentRoute,
              allCountries: s0.allCountries,
              NotVisitedCountries: s0.NotVisitedCountries,
              WishlistCountries: s0.WishlistCountries,
              FavoritesCountries: s0.FavoritesCountries,
              VisitedCountries: s0.VisitedCountries,
              addToFavourites: (e) =>
                setState((s0) => HandleAddToVisited(e)(s0)),
            })}
          </>
        )}
      </>
    )).map((u) => u(s0))
  )({
    email: "",
    password: "",
    isLogged: true,
    currentRoute: "all",
    allCountries: [],
    NotVisitedCountries: [],
    WishlistCountries: [],
    FavoritesCountries: [],
    VisitedCountries: [],
  }).run((s0) => s0);

export default App;

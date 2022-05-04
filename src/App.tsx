import React from "react";
import "./App.css";
import { Action, fromJSX, stateful } from "widgets-for-react";
import { LoginWidget } from "./Components/Login/LoginWidget";
import { HeaderWidget } from "./Components/Header/HeaderWidget";
import CountryWidget from "./Components/CountryPicker/CountryWidget";
import {
  HandleLoadedCountries,
  Router,
  Routes,
} from "./Components/EventHandlers/EventHandlers";
import { HandleAddToFavourites } from "./Components/EventHandlers/HandleFavourited/AddToFavourited";
import { HandleRemoveFromFavourited } from "./Components/EventHandlers/HandleFavourited/RemoveFromFavourited";
import { HandleAddToVisited } from "./Components/EventHandlers/HandleVisited/AddToVisited";
import { HandleRemoveFromVisited } from "./Components/EventHandlers/HandleVisited/RemoveFromVisited";
import { HandleAddToWishList } from "./Components/EventHandlers/HandleWishList/AddToWishList";
import { HandleRemoveFromWishList } from "./Components/EventHandlers/HandleWishList/RemoveFromWishList";
import {
  HandleEmail,
  HandlePassword,
  HandleLogin,
} from "./Components/EventHandlers/LoginEvents";
import { Continent, Country } from "./Components/CountryPicker/CountryState";
import {
  HandleContinentChange,
  HandleOnClear,
} from "./Components/EventHandlers/HandleSelectContinent";

export type AppState = {
  email: string;
  password: string;
  isLogged: boolean;
  currentRoute: Routes;
  filtered: boolean;
  selectedContinent: Continent;
  allCountries: Country[];
  VisitedCountries: Country[];
  NotVisitedCountries: Country[];
  FavouritedCountries: Country[];
  WishlistCountries: Country[];
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
              currentRoute: s0.currentRoute,
            })}
            {CountryWidget({
              CountriesLoaded: (e) =>
                setState((s0) => HandleLoadedCountries(e)(s0)),
              currentRoute: s0.currentRoute,
              allCountries: s0.allCountries,
              selectedContinent: s0.selectedContinent,
              NotVisitedCountries: s0.NotVisitedCountries,
              WishlistCountries: s0.WishlistCountries,
              FavoritedCountries: s0.FavouritedCountries,
              VisitedCountries: s0.VisitedCountries,
              onChange: (e) => setState((s0) => HandleContinentChange(e)(s0)),
              onClear: () => setState((s0) => HandleOnClear(s0)),
              addToVisited: (e) => setState((s0) => HandleAddToVisited(e)(s0)),
              removeFromVisited: (e) =>
                setState((s0) => HandleRemoveFromVisited(e)(s0)),
              addToFavourites: (e) =>
                setState((s0) => HandleAddToFavourites(e)(s0)),
              removeFromFavourites: (e) =>
                setState((s0) => HandleRemoveFromFavourited(e)(s0)),
              addToWishList: (e) =>
                setState((s0) => HandleAddToWishList(e)(s0)),
              removeFromWishList: (e) =>
                setState((s0) => HandleRemoveFromWishList(e)(s0)),
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
    filtered: false,
    selectedContinent: "All",
    allCountries: [],
    NotVisitedCountries: [],
    WishlistCountries: [],
    FavouritedCountries: [],
    VisitedCountries: [],
  }).run((s0) => s0);

export default App;

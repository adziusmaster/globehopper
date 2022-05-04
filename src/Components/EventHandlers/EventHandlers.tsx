import { Fun, Action } from "widgets-for-react";
import { AppState } from "../../App";
import AllCountries from "../CountryOverview/AllCountries";
import { CountryOverviewProps } from "../CountryOverview/CountryOverviewState";
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

export const CountriesRouter = (props: CountryOverviewProps): JSX.Element => {
  let jsx: JSX.Element = <></>;
  switch (props.currentRoute) {
    case "all":
      jsx = (
        <>
          {AllCountries({
            countries: props.allCountries,
            selectedContinent: props.selectedContinent,
            onChange: props.onChange,
            addToVisited: props.addToVisited,
            removeFromVisited: props.removeFromVisited,
            addToFavourites: props.addToFavourites,
            removeFromFavourites: props.removeFromFavourites,
            addToWishList: props.addToWishList,
            removeFromWishList: props.removeFromWishList,
          })}
        </>
      );
      break;
    case "favotites":
      jsx = (
        <>
          {AllCountries({
            countries: props.FavoritesCountries,
            selectedContinent: props.selectedContinent,
            onChange: props.onChange,
            addToVisited: props.addToVisited,
            removeFromVisited: props.removeFromVisited,
            addToFavourites: props.addToFavourites,
            removeFromFavourites: props.removeFromFavourites,
            addToWishList: props.addToWishList,
            removeFromWishList: props.removeFromWishList,
          })}
        </>
      );
      break;
    case "notVisited":
      jsx = (
        <>
          {AllCountries({
            countries: props.NotVisitedCountries,
            selectedContinent: props.selectedContinent,
            onChange: props.onChange,
            addToVisited: props.addToVisited,
            removeFromVisited: props.removeFromVisited,
            addToFavourites: props.addToFavourites,
            removeFromFavourites: props.removeFromFavourites,
            addToWishList: props.addToWishList,
            removeFromWishList: props.removeFromWishList,
          })}
        </>
      );
      break;
    case "visited":
      jsx = (
        <>
          {AllCountries({
            countries: props.VisitedCountries,
            selectedContinent: props.selectedContinent,
            onChange: props.onChange,
            addToVisited: props.addToVisited,
            removeFromVisited: props.removeFromVisited,
            addToFavourites: props.addToFavourites,
            removeFromFavourites: props.removeFromFavourites,
            addToWishList: props.addToWishList,
            removeFromWishList: props.removeFromWishList,
          })}
        </>
      );
      break;
    case "wishList":
      jsx = (
        <>
          {AllCountries({
            countries: props.WishlistCountries,
            selectedContinent: props.selectedContinent,
            onChange: props.onChange,
            addToVisited: props.addToVisited,
            removeFromVisited: props.removeFromVisited,
            addToFavourites: props.addToFavourites,
            removeFromFavourites: props.removeFromFavourites,
            addToWishList: props.addToWishList,
            removeFromWishList: props.removeFromWishList,
          })}
        </>
      );
      break;
    default:
      jsx = <></>;
  }
  return jsx;
};

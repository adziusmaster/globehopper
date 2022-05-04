import { Fun, Action } from "widgets-for-react";
import { AppState } from "../../../App";
import { Country } from "../../CountryPicker/CountryState";

export const HandleAddToVisited: Fun<Country, Action<AppState>> =
  (country: Country) => (state: AppState) => {
    let updatedCountry: Country = {
      ...country,
      howManyVisits: 1,
    };
    let newVisitedCountry = [updatedCountry];
    let newState: AppState = { ...state };

    let indexInAllCountries = state.allCountries.indexOf(country);
    let updatedAllCountries = state.allCountries;
    updatedAllCountries.splice(indexInAllCountries, 1, updatedCountry);

    let indexInFavouritedCountries = state.FavouritedCountries.indexOf(country);
    let updatedFavouritedCountries = state.FavouritedCountries;
    if (indexInFavouritedCountries !== -1) {
      updatedFavouritedCountries.splice(
        indexInFavouritedCountries,
        1,
        updatedCountry
      );
    }

    let indexInWishListCountries = state.WishlistCountries.indexOf(country);
    let updatedWishListCountries = state.WishlistCountries;
    if (indexInWishListCountries !== -1) {
      updatedWishListCountries.splice(
        indexInWishListCountries,
        1,
        updatedCountry
      );
    }

    let indexInNotVisitedCountries = state.NotVisitedCountries.findIndex(
      (c) => c.name === country.name
    );
    let updatedNotVisitedCountries = state.NotVisitedCountries;

    console.log(updatedAllCountries);

    updatedNotVisitedCountries.splice(indexInNotVisitedCountries, 1);

    console.log(updatedAllCountries);

    newState = {
      ...state,
      allCountries: updatedAllCountries,
      FavouritedCountries: updatedFavouritedCountries,
      WishlistCountries: updatedWishListCountries,
      NotVisitedCountries: updatedNotVisitedCountries,
      VisitedCountries: state.VisitedCountries.concat(newVisitedCountry),
    };

    return newState;
  };

import { Fun, Action } from "widgets-for-react";
import { AppState } from "../../../App";
import { Country } from "../../CountryPicker/CountryState";

export const HandleRemoveFromFavourited: Fun<Country, Action<AppState>> =
  (country: Country) => (state: AppState) => {
    let updatedCountry: Country = {
      ...country,
      favourited: false,
    };

    let newState: AppState = { ...state };

    let indexInFavouritedCountries = state.FavouritedCountries.indexOf(country);
    let updatedFavouritedCountries = state.FavouritedCountries;
    updatedFavouritedCountries.splice(indexInFavouritedCountries, 1);

    let indexInAllCountries = state.allCountries.indexOf(country);
    let updatedAllCountries = state.allCountries;
    updatedAllCountries.splice(indexInAllCountries, 1, updatedCountry);

    let indexInWishListCountries = state.WishlistCountries.indexOf(country);
    let updatedWishListCountries = state.WishlistCountries;
    if (indexInWishListCountries !== -1) {
      updatedWishListCountries.splice(
        indexInWishListCountries,
        1,
        updatedCountry
      );
    }

    let indexInNotVisitedCountries = state.NotVisitedCountries.indexOf(country);
    let updatedNotVisitedCountries = state.NotVisitedCountries;
    if (indexInNotVisitedCountries !== -1) {
      updatedNotVisitedCountries.splice(
        indexInNotVisitedCountries,
        1,
        updatedCountry
      );
    }

    let indexInVisitedCountries = state.VisitedCountries.indexOf(country);
    let updatedVisitedCountries = state.VisitedCountries;
    if (indexInVisitedCountries !== -1) {
      updatedVisitedCountries.splice(
        indexInVisitedCountries,
        1,
        updatedCountry
      );
    }

    newState = {
      ...state,
      allCountries: updatedAllCountries,
      FavouritedCountries: updatedFavouritedCountries,
      WishlistCountries: updatedWishListCountries,
      NotVisitedCountries: updatedNotVisitedCountries,
      VisitedCountries: updatedVisitedCountries,
    };

    return newState;
  };

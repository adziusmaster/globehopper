import { Fun, Action } from "widgets-for-react";
import { Country } from "../../CountryPicker/CountryState";
import { AppState } from "../EventHandlers";

export const HandleRemoveFromWishList: Fun<Country, Action<AppState>> =
  (country: Country) => (state: AppState) => {
    let updatedCountry: Country = {
      ...country,
      wishList: false,
    };
    let newState: AppState = { ...state };

    let indexInWishListCountries = state.WishlistCountries.indexOf(country);
    let updatedWishListCountries = state.WishlistCountries;
    updatedWishListCountries.splice(indexInWishListCountries, 1);

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
      WishlistCountries: updatedWishListCountries,
      NotVisitedCountries: updatedNotVisitedCountries,
      VisitedCountries: updatedVisitedCountries,
      FavouritedCountries: updatedFavouritedCountries,
    };
    return newState;
  };

import { Fun, Action } from "widgets-for-react";
import { Country } from "../../CountryPicker/CountryState";
import { AppState } from "../EventHandlers";

export const HandleRemoveFromVisited: Fun<Country, Action<AppState>> =
  (country: Country) => (state: AppState) => {
    let updatedCountry: Country = {
      ...country,
      howManyVisits: 0,
    };

    let newNotVisitedCountry = [updatedCountry];
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

    let indexInVisitedCountries = state.VisitedCountries.indexOf(country);
    let updatedVisitedCountries = state.VisitedCountries;
    if (indexInVisitedCountries !== -1) {
      updatedVisitedCountries.splice(indexInVisitedCountries, 1);
    }

    let updatedNotVisitedCountries = state.NotVisitedCountries;
    updatedNotVisitedCountries.concat(newNotVisitedCountry);

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

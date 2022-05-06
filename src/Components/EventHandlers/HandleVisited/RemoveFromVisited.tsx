import { Fun, Action } from "widgets-for-react";
import { AppState } from "../../../App";
import { Country } from "../../CountryPicker/CountryState";

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
    updatedNotVisitedCountries =
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

export const HandleRemoveCountFromVisited: Fun<Country, Action<AppState>> =
  (country: Country) => (state: AppState) => {
    let newState: AppState = { ...state };

    let updatedAllCountries = state.allCountries;
    let allCountryIndex = updatedAllCountries.findIndex((ac => ac.cca3 === country.cca3));
    let newAmountOfVisits = (updatedAllCountries[allCountryIndex].howManyVisits - 1);
    updatedAllCountries[allCountryIndex].howManyVisits = newAmountOfVisits;

    let updatedFavouritedCountries = state.FavouritedCountries;
    let favouritedCountryIndex = updatedFavouritedCountries.findIndex((fc => fc.cca3 === country.cca3));
    if(favouritedCountryIndex !== -1) {
      updatedFavouritedCountries[favouritedCountryIndex].howManyVisits = newAmountOfVisits;
    }

    let updatedWishListCountries = state.WishlistCountries;
    let wishlistCountryIndex = updatedWishListCountries.findIndex((wc => wc.cca3 === country.cca3));
    if(wishlistCountryIndex !== -1) {
      updatedWishListCountries[wishlistCountryIndex].howManyVisits = newAmountOfVisits;
    }

    let updatedVisitedCountries = state.VisitedCountries;
    let visitedCountryIndex = updatedVisitedCountries.findIndex((vc => vc.cca3 === country.cca3));
    if(visitedCountryIndex !== -1) {
      updatedVisitedCountries[visitedCountryIndex].howManyVisits = newAmountOfVisits;
    }

    newState = {
      ...state,
      allCountries: updatedAllCountries,
      FavouritedCountries: updatedFavouritedCountries,
      WishlistCountries: updatedWishListCountries,
      VisitedCountries: updatedVisitedCountries,
    };

    return newState;
  };
  
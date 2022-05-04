import {
  stateful,
  any,
  Action,
  async,
  fromJSX,
  loadingAsyncState,
} from "widgets-for-react";
import CountryOverview from "../CountryOverview/CountryOverviewWidget";
import { fetchCountries, fetchSubCountries } from "./CountryApi";
import { Country, CountrySelectorProps, CountryState } from "./CountryState";

const loadCountriesIntoState = (
  countries: Country[],
  countryLoader: (c: Country[]) => void
) => {
  let allCountries: Country[] = [];
  let newCountry: Country;
  let iterator = 0;
  
  while (iterator < countries.length) {
    let subCountries = fetchSubCountries[fetchSubCountries.findIndex(country => country.country === countries[iterator].cca3)]

    newCountry = {
      continents: countries[iterator].continents,
      flags: {
        png: countries[iterator].flags.png,
        svg: countries[iterator].flags.svg,
      },
      name: countries[iterator].name,
      cca3: countries[iterator].cca3, // Abbrevation
      howManyVisits: 0,
      favourited: false,
      wishList: false,
      subCountries: subCountries && subCountries.subCountries ? subCountries.subCountries : undefined
    };
    allCountries.push(newCountry);
    iterator = iterator + 1;
  }
  return countryLoader(allCountries);
};

const CountryWidget = (props: CountrySelectorProps): JSX.Element =>
  stateful<CountryState>({ key: "countryState" })((s0) =>
    any<Action<CountryState>>({ key: "countryAny" })([
      async<Country[]>()(s0.country).map((a) => (s1: CountryState) => {
        var result = a(s1.country);
        if (result.kind === "loaded") {
          loadCountriesIntoState(result.value, props.CountriesLoaded);
        }
        return {
          ...s1,
          country: result,
        };
      }),
      fromJSX((setState: (_: Action<CountryState>) => void) => {
        if (s0.country.kind === "connection-error") {
          return (
            <>
              <span key="ERROR">ERROR</span>
            </>
          );
        }
        return (
          <>
            {CountryOverview(
              {
                currentRoute: props.currentRoute,
                allCountries: props.allCountries,
                NotVisitedCountries: props.NotVisitedCountries,
                WishlistCountries: props.WishlistCountries,
                FavoritesCountries: props.FavoritedCountries,
                VisitedCountries: props.VisitedCountries,
                kindOfResult: s0.country.kind,
                selectedContinent: props.selectedContinent,
                addToVisited: props.addToVisited,
                removeFromVisited: props.removeFromVisited,
                addToFavourites: props.addToFavourites,
                removeFromFavourites: props.removeFromFavourites,
                addToWishList: props.addToWishList,
                removeFromWishList: props.removeFromWishList,
              },
              {
                onChange: props.onChange,
                onClear: props.onClear,
                onClearSearch: props.onClearSearch,
                selectedContinent: props.selectedContinent,
                searchedName: props.searchedName,
                onSearch: props.onSearch,
              }
            )}
          </>
        );
      }),
    ]).map((u) => u(s0))
  )({ country: loadingAsyncState((_) => fetchCountries()) }).run(
    (n) => n.country
  );

export default CountryWidget;

import {
  stateful,
  any,
  Action,
  async,
  fromJSX,
  loadingAsyncState,
} from "widgets-for-react";
import CountryOverview from "../CountryOverview/CountryOverviewWidget";
import { fetchExtraCountries } from "./API/ExtraCountries";
import { fetchGovernedCountries } from "./API/GovernedCountries";
import { fetchSplitCountries } from "./API/SplitCountries";
import { fetchSubCountries } from "./API/SubCountries";
import { fetchCountries } from "./CountryApi";
import { Country, CountryBase, CountrySelectorProps, CountryState, GovernedCountries, ParentCountry, SplitCountries } from "./CountryState";


const populateCountries = (
  country: CountryBase,
  countries: Country[],
  parentCountry?: ParentCountry,
  governingCountry?: ParentCountry,
) => {
  let newCountry: Country = {
    continents: country.continents,
    flags: {
      png: '',
      svg: country.flags.svg,
    },
    name: country.name,
    cca3: country.cca3, // Abbrevation
    howManyVisits: 0,
    favourited: false,
    wishList: false,
    modalVisible: false,
    parentCountry: parentCountry ? {
      continents: parentCountry.continents,
      flags: {
        png: '',
        svg: parentCountry.flags.svg,
      },
      name: parentCountry.name,
      cca3: parentCountry.cca3, // Abbrevation
    } : undefined,
    governingCountry: governingCountry ? {
      continents: governingCountry.continents,
      flags: {
        png: '',
        svg: governingCountry.flags.svg,
      },
      name: governingCountry.name,
      cca3: governingCountry.cca3, // Abbrevation
    } : undefined
  };

  countries.push(newCountry);
}

const loadCountriesIntoState = (
  countries: Country[],
  countryLoader: (c: Country[]) => void
) => {
  let allCountries: Country[] = [];
  let parentCountries: Country[] = [];
  let iterator = 0;
  
  while (iterator < countries.length) {
    let isParentCountry: boolean = fetchSubCountries.findIndex(country => country.country === countries[iterator].cca3) !== -1 ? true : false;

    if(isParentCountry === true) {
      populateCountries(countries[iterator], parentCountries);

      const subCountries:Country[] = fetchSubCountries[fetchSubCountries.findIndex(country => country.country === countries[iterator].cca3)].subCountries;
      subCountries.forEach((subCountry) => {
        populateCountries(subCountry, allCountries, countries[iterator]);
      })
    } else {
      populateCountries(countries[iterator], allCountries);
    }
    
    iterator = iterator + 1;
  }

  // Add countries
  const extraCountries:Country[] = fetchExtraCountries;
  extraCountries.forEach((country) => {
    populateCountries(country, allCountries);
  });

  // SPLIT countries
  allCountries.forEach((country) => {
    let isSplitCountry: boolean = fetchSplitCountries.findIndex(gc => gc.country === country.cca3) !== -1 ? true : false;

    if(isSplitCountry === true) {
      const splitCountry:SplitCountries = fetchSplitCountries[fetchSplitCountries.findIndex(gc => gc.country === country.cca3)];
      let parentCountry:Country = country;

      populateCountries(parentCountry, parentCountries);

      splitCountry.splitCountries.forEach((splitCountry) => {
        populateCountries(splitCountry, allCountries, parentCountry);
      });

      allCountries.splice(allCountries.findIndex(ac => ac.cca3 === parentCountry.cca3), 1);
    }
  });

  // ADD governing parent countries
  allCountries.forEach((country) => {
    let isGovernedCountry: boolean = fetchGovernedCountries.findIndex(gc => gc.country === country.cca3) !== -1 ? true : false;

    if(isGovernedCountry === true) {
      const governedCountry:GovernedCountries = fetchGovernedCountries[fetchGovernedCountries.findIndex(gc => gc.country === country.cca3)];
      let governingCountry:Country = allCountries[allCountries.findIndex(c => c.cca3 === governedCountry.governingCountry)];

      if(governingCountry == null) {
        governingCountry = parentCountries[parentCountries.findIndex(c => c.cca3 === governedCountry.governingCountry)];
      }

      if(governingCountry != null) {
        country.governingCountry = {
          continents: governingCountry.continents,
          flags: {
            png: '',
            svg: governingCountry.flags.svg,
          },
          name: governingCountry.name,
          cca3: governingCountry.cca3, // Abbrevation
        }
        country.governedBy = governedCountry.description
      }
    }
  });

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
                showModal: props.showModal,
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

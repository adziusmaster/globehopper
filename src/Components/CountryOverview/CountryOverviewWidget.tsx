import { Country } from "../CountryPicker/CountryState";
import { SortAndFilterProps } from "../SortAndFilterWidget/SortAndFilterState";
import SortAndFilterWidget from "../SortAndFilterWidget/SortAndFilterWidget";
import AllCountries from "./AllCountries";
import { CountryOverviewProps } from "./CountryOverviewState";
import LoadingCountries from "./LoadingCountries";

const GetCountryOverview = (props: CountryOverviewProps): Country[] => {
  let countries: Country[] = [];

  switch (props.currentRoute) {
    case "all":
      countries = props.allCountries;
      break;

    case "visited":
      countries = props.VisitedCountries;
      break;

    case "notVisited":
      countries = props.NotVisitedCountries;
      break;

    case "wishList":
      countries = props.WishlistCountries;
      break;

    case "favotites":
      countries = props.FavoritesCountries;
      break;
  }

  return countries;
};

const CountryOverview = (
  props: CountryOverviewProps,
  filterProps: SortAndFilterProps
): JSX.Element => (
  <>
    <main className="main">
      <div className="main__inner container">
        <section id="a11y--countries" className="overview overview--countries">
          <h2 className="sr-text">Overview</h2>
          {SortAndFilterWidget({
            onChange: filterProps.onChange,
            onClear: filterProps.onClear,
            onClearSearch: filterProps.onClearSearch,
            onSearch: filterProps.onSearch,
            selectedContinent: filterProps.selectedContinent,
            searchedName: filterProps.searchedName,
          })}
          {props.kindOfResult === "loading" ? (
            <>{LoadingCountries()}</>
          ) : (
            <>
              {AllCountries({
                countries: GetCountryOverview(props),
                addToVisited: props.addToVisited,
                removeFromVisited: props.removeFromVisited,
                addCountToVisited: props.addCountToVisited,
                removeCountFromVisited: props.removeCountFromVisited,
                addToFavourites: props.addToFavourites,
                removeFromFavourites: props.removeFromFavourites,
                addToWishList: props.addToWishList,
                removeFromWishList: props.removeFromWishList,
                selectedContinent: filterProps.selectedContinent,
                searchedName: filterProps.searchedName,
                showModal: props.showModal,
              })}
            </>
          )}
        </section>
      </div>
    </main>
  </>
);

export default CountryOverview;

import SortAndFilterWidget from "../SortAndFilterWidget/SortAndFilterWidget";
import AllCountries from "./AllCountries";
import { CountryOverviewProps } from "./CountryOverviewState";
import FavoritesCountries from "./FavoritesCountries";
import LoadingCountries from "./LoadingCountries";
import NotVisitedCountries from "./NotVisitedCountries";
import VisitedCountries from "./VisitedCountries";
import WishlistCountries from "./WishlistCountries";

const CountryOverview = (props: CountryOverviewProps): JSX.Element => (
  <>
    <main className="main">
      <div className="main__inner container">
        <section id="a11y--countries" className="overview overview--countries">
          <h2 className="sr-text">Overview</h2>
          {SortAndFilterWidget({})}
          {props.kindOfResult === "loading" ? (
            <>
              <ul className="overview__list">{LoadingCountries()}</ul>
            </>
          ) : (
            <>
              <ul className="overview__list">
                {props.currentRoute === "all" && (
                  <>
                    {AllCountries({
                      countries: props.allCountries,
                      addToFavourites: props.addToFavourites,
                    })}
                  </>
                )}
                {props.currentRoute === "visited" && (
                  <>
                    {VisitedCountries({
                      countries: props.VisitedCountries,
                      addToFavourites: props.addToFavourites,
                    })}
                  </>
                )}
                {props.currentRoute === "notVisited" && (
                  <>
                    {NotVisitedCountries({
                      countries: props.NotVisitedCountries,
                      addToFavourites: props.addToFavourites,
                    })}
                  </>
                )}
                {props.currentRoute === "wishList" && (
                  <>
                    {WishlistCountries({
                      countries: props.WishlistCountries,
                      addToFavourites: props.addToFavourites,
                    })}
                  </>
                )}
                {props.currentRoute === "favotites" && (
                  <>
                    {FavoritesCountries({
                      countries: props.FavoritesCountries,
                      addToFavourites: props.addToFavourites,
                    })}
                  </>
                )}
              </ul>
            </>
          )}
        </section>
      </div>
    </main>
  </>
);

export default CountryOverview;

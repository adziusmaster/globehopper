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
                      addToVisited: props.addToVisited,
                      addOneVisit: props.addOneVisit,
                    })}
                  </>
                )}
                {props.currentRoute === "visited" && (
                  <>
                    {VisitedCountries({
                      countries: props.VisitedCountries,
                      addToVisited: props.addToVisited,
                      addOneVisit: props.addOneVisit,
                    })}
                  </>
                )}
                {props.currentRoute === "notVisited" && (
                  <>
                    {NotVisitedCountries({
                      countries: props.NotVisitedCountries,
                      addToVisited: props.addToVisited,
                      addOneVisit: props.addOneVisit,
                    })}
                  </>
                )}
                {props.currentRoute === "wishList" && (
                  <>
                    {WishlistCountries({
                      countries: props.WishlistCountries,
                      addToVisited: props.addToVisited,
                      addOneVisit: props.addOneVisit,
                    })}
                  </>
                )}
                {props.currentRoute === "favotites" && (
                  <>
                    {FavoritesCountries({
                      countries: props.FavoritesCountries,
                      addToVisited: props.addToVisited,
                      addOneVisit: props.addOneVisit,
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

import SortAndFilterWidget from "../SortAndFilterWidget/SortAndFilterWidget";
import AllCountries from "./AllCountries";
import { CountryOverviewProps } from "./CountryOverviewState";
import LoadingCountries from "./LoadingCountries";

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
                      removeFromVisited: props.removeFromVisited,
                      addToFavourites: props.addToFavourites,
                      removeFromFavourites: props.removeFromFavourites,
                      addToWishList: props.addToWishList,
                      removeFromWishList: props.removeFromWishList,
                    })}
                  </>
                )}
                {props.currentRoute === "visited" && (
                  <>
                    {AllCountries({
                      countries: props.VisitedCountries,
                      addToVisited: props.addToVisited,
                      removeFromVisited: props.removeFromVisited,
                      addToFavourites: props.addToFavourites,
                      removeFromFavourites: props.removeFromFavourites,
                      addToWishList: props.addToWishList,
                      removeFromWishList: props.removeFromWishList,
                    })}
                  </>
                )}
                {props.currentRoute === "notVisited" && (
                  <>
                    {AllCountries({
                      countries: props.NotVisitedCountries,
                      addToVisited: props.addToVisited,
                      removeFromVisited: props.removeFromVisited,
                      addToFavourites: props.addToFavourites,
                      removeFromFavourites: props.removeFromFavourites,
                      addToWishList: props.addToWishList,
                      removeFromWishList: props.removeFromWishList,
                    })}
                  </>
                )}
                {props.currentRoute === "wishList" && (
                  <>
                    {AllCountries({
                      countries: props.WishlistCountries,
                      addToVisited: props.addToVisited,
                      removeFromVisited: props.removeFromVisited,
                      addToFavourites: props.addToFavourites,
                      removeFromFavourites: props.removeFromFavourites,
                      addToWishList: props.addToWishList,
                      removeFromWishList: props.removeFromWishList,
                    })}
                  </>
                )}
                {props.currentRoute === "favotites" && (
                  <>
                    {AllCountries({
                      countries: props.FavoritesCountries,
                      addToVisited: props.addToVisited,
                      removeFromVisited: props.removeFromVisited,
                      addToFavourites: props.addToFavourites,
                      removeFromFavourites: props.removeFromFavourites,
                      addToWishList: props.addToWishList,
                      removeFromWishList: props.removeFromWishList,
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

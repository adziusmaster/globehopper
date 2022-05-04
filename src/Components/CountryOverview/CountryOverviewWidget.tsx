import { CountriesRouter } from "../EventHandlers/EventHandlers";
import SortAndFilterWidget from "../SortAndFilterWidget/SortAndFilterWidget";
import { CountryOverviewProps } from "./CountryOverviewState";
import LoadingCountries from "./LoadingCountries";

const CountryOverview = (props: CountryOverviewProps): JSX.Element => (
  <>
    <main className="main">
      <div className="main__inner container">
        <section id="a11y--countries" className="overview overview--countries">
          <h2 className="sr-text">Overview</h2>
          {SortAndFilterWidget({ onChange: props.onChange })}
          {props.kindOfResult === "loading" ? (
            <>
              <ul className="overview__list">{LoadingCountries()}</ul>
            </>
          ) : (
            <>
              <ul className="overview__list">{CountriesRouter(props)}</ul>
            </>
          )}
        </section>
      </div>
    </main>
  </>
);

export default CountryOverview;

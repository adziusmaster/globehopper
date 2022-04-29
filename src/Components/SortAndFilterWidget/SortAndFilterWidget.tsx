import { SortAndFilterProps } from "./SortAndFilterState";

const SortAndFilterWidget = (props: SortAndFilterProps): JSX.Element => (
  <>
    <div className="filters">
      <div className="filters__inner">
        <div className="select">
          <label className="select__label" htmlFor="a11y--sort-overview">
            Sort on:
          </label>
          <div id="js--sort-overview" className="select__inner">
            <select id="a11y--sort-overview" className="select__input">
              <option value="amount" selected>
                Amount of visits
              </option>
              <option value="a-z">Alphabetical (descending)</option>
              <option value="z-a">Alphabetical (ascending)</option>
            </select>
            <div className="select__fauxselect" aria-hidden="true">
              <button
                id="js--sort-trigger-overview"
                className="select__trigger"
                tabIndex={-1}
              >
                Amount of visits
              </button>
              <div className="select__options">
                <button className="select__option" tabIndex={-1} data-sort="1">
                  Amount of visits
                </button>
                <button className="select__option" tabIndex={-1} data-sort="2">
                  Alphabetical (descending)
                </button>
                <button className="select__option" tabIndex={-1} data-sort="3">
                  Alphabetical (ascending)
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="filter">
          <label className="filter__label" htmlFor="a11y--filter-continent">
            Filter on continent:
          </label>
          <div id="js--filter-continent" className="filter__inner">
            <select id="a11y--filter-continent" className="filter__select">
              <option value="" selected>
                Select a continent...
              </option>
              <option value="africa">Africa</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="north-ameria">North America</option>
              <option value="south-america">South America</option>
              <option value="antarctica">Antarctica</option>
              <option value="australia">Australia</option>
            </select>
            <div className="filter__fauxselect" aria-hidden="true">
              <button
                id="js--filter-trigger-continent"
                className="filter__trigger"
                tabIndex={-1}
              >
                Select a continent...
              </button>
              <div className="filter__options">
                <button
                  className="filter__option"
                  tabIndex={-1}
                  data-continent="1"
                >
                  Africa
                </button>
                <button
                  className="filter__option"
                  tabIndex={-1}
                  data-continent="2"
                >
                  Asia
                </button>
                <button
                  className="filter__option"
                  tabIndex={-1}
                  data-continent="3"
                >
                  Europe
                </button>
                <button
                  className="filter__option"
                  tabIndex={-1}
                  data-continent="4"
                >
                  North America
                </button>
                <button
                  className="filter__option"
                  tabIndex={-1}
                  data-continent="5"
                >
                  South America
                </button>
                <button
                  className="filter__option"
                  tabIndex={-1}
                  data-continent="6"
                >
                  Antarctica
                </button>
                <button
                  className="filter__option"
                  tabIndex={-1}
                  data-continent="7"
                >
                  Australia
                </button>
              </div>
            </div>
            <button
              id="js--filter-clear-continent"
              className="filter__clear"
              aria-label="Clear the filter"
            >
              <svg
                className="filter__icon"
                width="24px"
                height="24px"
                aria-hidden="true"
              >
                <use href="#icon--cross" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default SortAndFilterWidget;

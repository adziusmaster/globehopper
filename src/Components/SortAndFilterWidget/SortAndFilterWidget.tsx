import { ButtonSpecialNoDivWidget } from "../Button/ButtonWidget";
import { SortAndFilterProps } from "./SortAndFilterState";
import * as Icons from "react-bootstrap-icons";

const SortAndFilterWidget = (props: SortAndFilterProps): JSX.Element => (
  <>
    <div className="filters">
      <div className="filters__inner">
        <div className="filter__item filter__item--search">
          <label className="filter__label" htmlFor="a11y--search-country">
            Search on country:
          </label>
          <div id="js--search-country" className="filter__inner">
            <input
              className="filter__input"
              type="search"
              onChange={props.onSearch}
              value={props.searchedName}
            />
            <Icons.Search className="filter__icon" size={18} />
            {ButtonSpecialNoDivWidget({
              key: "clearSearch",
              onClick: props.onClearSearch,
              classNameButton: "filter__clear",
              Svg: (
                <>
                  <Icons.X size={24} color="" />
                </>
              ),
            })}
          </div>
        </div>

        <div className="filter__item filter__item--continent">
          <label className="filter__label" htmlFor="a11y--filter-continent">
            Filter on continent:
          </label>
          <div id="js--filter-continent" className="filter__inner">
            <select
              id="a11y--filter-continent"
              className="filter__input"
              onChange={(e) => props.onChange(e)}
              value={props.selectedContinent}
            >
              <option value="All">All</option>
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="South America">South America</option>
              <option value="North America">North America</option>
              <option value="Oceania">Oceania</option>
              <option value="Antarctica">Antarctica</option>
            </select>
            <Icons.CaretDownFill className="filter__icon" size={18} />
            {ButtonSpecialNoDivWidget({
              key: "clearFilter",
              onClick: props.onClear,
              classNameButton: "filter__clear",
              Svg: (
                <>
                  <Icons.X size={24} color="" />
                </>
              ),
            })}
          </div>
        </div>

        <div className="filter__item filter__item--sort">
          <label className="filter__label" htmlFor="a11y--sort-overview">
            Sort on:
          </label>
          <div id="js--sort-overview" className="filter__inner">
            <select id="a11y--sort-overview" className="filter__input" value="a-z">
              <option value="a-z">Alphabetical</option>
              <option value="favs">Most Favourited</option>
              <option value="wishes">Most WishListed</option>
            </select>
            <Icons.CaretDownFill className="filter__icon" size={18} />
          </div>
        </div>
      </div>
    </div>
  </>
);
export default SortAndFilterWidget;

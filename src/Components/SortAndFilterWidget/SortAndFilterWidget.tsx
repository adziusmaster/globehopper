import { ButtonSpecialNoDivWidget } from "../Button/ButtonWidget";
import { SortAndFilterProps } from "./SortAndFilterState";
import * as Icons from "react-bootstrap-icons";

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
              <option value="a-z" selected>
                Alphabetical
              </option>
              <option value="favs">Most Favourited</option>
              <option value="wishes">Most WishListed</option>
            </select>
          </div>
        </div>

        <div className="filter">
          <label className="filter__label" htmlFor="a11y--filter-continent">
            Filter on continent:
          </label>
          <div id="js--filter-continent" className="filter__inner">
            <select
              id="a11y--filter-continent"
              className="filter__select"
              onChange={(e) => props.onChange(e)}
            >
              <option value="All" selected>
                All
              </option>
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="South America">South America</option>
              <option value="North America">North America</option>
              <option value="Oceania">Oceania</option>
              <option value="Antarctica">Antarctica</option>
            </select>
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
      </div>
    </div>
  </>
);
export default SortAndFilterWidget;

import { AnchorLinkWidget } from "../AnchorLink/AnchorLinkWidget";
import { ButtonSpecialNoDivWidget } from "../Button/ButtonWidget";
import SvgWidget from "../SvgWidget/SvgWidget";
import { CountriesProps } from "./CountryOverviewState";
import * as Icons from "react-bootstrap-icons";
import { Country } from "../CountryPicker/CountryState";

const TeaserCountry = (
  country: Country,
  parentProps: CountriesProps
): JSX.Element => (
  <li className="overview__item" key={`tc-${country.cca3}`}>
    <article
      className={`teaser teaser--country${
        country.howManyVisits > 0 ? " checked" : ""
      }`}
    >
      <div className="teaser__inner">
        <div className="teaser__content">
          <header className="teaser__header">
            <div className="country country--full">
              <div className="country__flag">
                <img
                  src={country.flags.svg}
                  loading="lazy"
                  alt=""
                  width="36"
                  height="24"
                />
              </div>
              <h3 className="country__name teaser__title">
                {country.name.common}
              </h3>
            </div>
            <div className="meta">
              <div className="meta__item continent">{country.continents}</div>
            </div>
          </header>

          {country.howManyVisits === 0 ? (
            <>
              <div className="teaser__status">
                <span className="sr-text">
                  {country.name.common} is not in your visited countries list
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="teaser__status">
                <span className="sr-text">
                  {country.name.common} is in your visited countries list
                </span>
                {SvgWidget({
                  className: "teaser__check checked",
                  width: "48px",
                  height: "48px",
                  href: "#icon--check",
                })}
              </div>
            </>
          )}
        </div>

        <footer className="teaser__footer">
          <div className="teaser__actions">
            {AnchorLinkWidget({
              key: "info",
              className: "teaser__action teaser__info",
              href: "#",
              text: `More information about ${country.name.common}`,
              Svg: (
                <>
                  <Icons.InfoCircle size={24} color="" />
                </>
              ),
            })}
            {country.howManyVisits === 0 ? (
              <>
                {ButtonSpecialNoDivWidget({
                  key: "addToVisited",
                  onClick: () => parentProps.addToVisited(country),
                  classNameButton: "teaser__action teaser__add",
                  aria: `Add ${country.name.common} to your visited countries list`,
                  Svg: (
                    <>
                      <Icons.CheckCircle size={24} color="" />
                    </>
                  ),
                })}
              </>
            ) : (
              <>
                {ButtonSpecialNoDivWidget({
                  key: "removeFromVisited",
                  onClick: () => parentProps.removeFromVisited(country),
                  classNameButton: "teaser__action teaser__add",
                  aria: `Remove ${country.name.common} from your visited countries list`,
                  Svg: (
                    <>
                      <Icons.CheckCircleFill size={24} color="" />
                    </>
                  ),
                })}
              </>
            )}
          </div>

          <div className="teaser__extras">
            {country.wishList ? (
              <>
                {ButtonSpecialNoDivWidget({
                  key: "removeFromWishList",
                  onClick: () => parentProps.removeFromWishList(country),
                  classNameButton: "teaser__action teaser__plus",
                  aria: `Remove ${country.name.common} from the wish list`,
                  Svg: (
                    <>
                      <Icons.StarFill size={24} color="" />
                    </>
                  ),
                })}
              </>
            ) : (
              <>
                {ButtonSpecialNoDivWidget({
                  key: "addToWishList",
                  onClick: () => parentProps.addToWishList(country),
                  classNameButton: "teaser__action teaser__plus",
                  aria: `Add ${country.name.common} to the wish list`,
                  Svg: (
                    <>
                      <Icons.Star size={24} color="" />
                    </>
                  ),
                })}
              </>
            )}

            {country.favourited ? (
              <>
                {ButtonSpecialNoDivWidget({
                  key: "removeFromFavourited",
                  onClick: () => parentProps.removeFromFavourites(country),
                  classNameButton: "teaser__action teaser__star",
                  aria: `Remove ${country.name.common} from favourited`,
                  Svg: (
                    <>
                      <Icons.HeartFill size={24} color="" />
                    </>
                  ),
                })}
              </>
            ) : (
              <>
                {ButtonSpecialNoDivWidget({
                  key: "addToFavourited",
                  onClick: () => parentProps.addToFavourites(country),
                  classNameButton: "teaser__action teaser__star",
                  aria: `Add ${country.name.common} to favourited`,
                  Svg: (
                    <>
                      <Icons.Heart size={24} color="" />
                    </>
                  ),
                })}
              </>
            )}
          </div>
        </footer>
      </div>
    </article>
  </li>
);

const AllCountries = (props: CountriesProps): JSX.Element => (
  <ul className="overview__list">
    {props.countries
      .sort((a, b) => a.name.common.localeCompare(b.name.common))
      .filter((a) =>
        props.selectedContinent === "All"
          ? a
          : a.continents[0] === props.selectedContinent
      )
      .map((country) => TeaserCountry(country, props))}
  </ul>
);

export default AllCountries;

import { AnchorLinkWidget } from "../AnchorLink/AnchorLinkWidget";
import {
  ButtonSpecialNoDivWidget,
  ButtonSpecialWidget,
} from "../Button/ButtonWidget";
import SvgWidget from "../SvgWidget/SvgWidget";
import { CountriesProps, CountryOverviewProps } from "./CountryOverviewState";

const AllCountries = (props: CountriesProps): JSX.Element => (
  <>
    {props.countries.map((country) => (
      <>
        <li className="overview__item">
          <article className="teaser teaser--country checked">
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
                    <div className="meta__item continent">
                      {country.continents}
                    </div>
                  </div>
                </header>
                {country.howManyVisits === 0 ? (
                  <>
                    <div className="teaser__status">
                      <span className="sr-text">
                        {country.name.official} is not in your visited countries
                        list
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="teaser__status">
                      <span className="sr-text">
                        {country.name.official} is in your visited countries
                        list
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
                    text: `More information about ${country.name.official}`,
                    Svg: SvgWidget({
                      className: "teaser__icon",
                      width: "24px",
                      height: "24px",
                      href: "#icon--info",
                    }),
                  })}
                  {country.howManyVisits === 0 ? (
                    <>
                      {ButtonSpecialNoDivWidget({
                        key: "addToVisited",
                        onClick: () => props.addToVisited(country),
                        classNameButton: "teaser__action teaser__add",
                        aria: `Add ${country.name.official} to your visited countries list`,
                        Svg: SvgWidget({
                          className: "teaser__icon",
                          width: "24px",
                          height: "24px",
                          href: "#icon--check",
                        }),
                      })}
                    </>
                  ) : (
                    <>
                      {ButtonSpecialNoDivWidget({
                        key: "addToVisited",
                        onClick: () => props.addToVisited(country),
                        disabled: true,
                        classNameButton: "teaser__action teaser__add",
                        aria: `Add ${country.name.official} to your visited countries list`,
                        Svg: SvgWidget({
                          className: "teaser__icon",
                          width: "24px",
                          height: "24px",
                          href: "#icon--check",
                        }),
                      })}
                    </>
                  )}
                </div>

                <div className="teaser__extras">
                  {ButtonSpecialNoDivWidget({
                    key: "addToWishList",
                    onClick: () => console.log("add to wish list"),
                    classNameButton: "teaser__action teaser__plus",
                    aria: `Add ${country.name.official} to the wish list`,
                    Svg: SvgWidget({
                      className: "teaser__icon",
                      width: "24px",
                      height: "24px",
                      href: "#icon--plus",
                    }),
                  })}
                  {ButtonSpecialNoDivWidget({
                    key: "addToFavourited",
                    onClick: () => console.log("add to favourited"),
                    classNameButton: "teaser__action teaser__star",
                    aria: `Add ${country.name.official} to favourited`,
                    Svg: SvgWidget({
                      className: "teaser__icon",
                      width: "24px",
                      height: "24px",
                      href: "#icon--heart",
                    }),
                  })}
                </div>
              </footer>
            </div>
          </article>
        </li>
      </>
    ))}
  </>
);

export default AllCountries;

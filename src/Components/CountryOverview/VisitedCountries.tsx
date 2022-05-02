import { AnchorLinkWidget } from "../AnchorLink/AnchorLinkWidget";
import { ButtonSpecialWidget } from "../Button/ButtonWidget";
import SvgWidget from "../SvgWidget/SvgWidget";
import { CountriesProps, CountryOverviewProps } from "./CountryOverviewState";

const VisitedCountries = (props: CountriesProps): JSX.Element => (
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

                <div className="teaser__status">
                  <span className="sr-text">
                    {country.name.official} is in your visited countries list
                  </span>
                </div>
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
                  {ButtonSpecialWidget({
                    key: "addToFav",
                    onClick: () => console.log("nopenopenope"),
                    classNameButton: "teaser__action teaser__add",
                    aria: `Add ${country.name.official} to your visited countries list`,
                    Svg: SvgWidget({
                      className: "teaser__icon",
                      width: "24px",
                      height: "24px",
                      href: "#icon--check",
                    }),
                  })}
                </div>

                <div className="teaser__extras">
                  <button
                    className="teaser__action teaser__plus"
                    aria-label="Add a visit to Unites States of America to your visited countries list"
                  >
                    <svg
                      className="teaser__icon"
                      width="24px"
                      height="24px"
                      aria-hidden="true"
                    >
                      <use href="#icon--plus" />
                    </svg>
                  </button>

                  <button
                    className="teaser__action teaser__star"
                    aria-label="Add Unites States of America to your favorite countries list"
                  >
                    <svg
                      className="teaser__icon"
                      width="24px"
                      height="24px"
                      aria-hidden="true"
                    >
                      <use href="#icon--heart" />
                    </svg>
                  </button>
                </div>
              </footer>
            </div>
          </article>
        </li>
      </>
    ))}
  </>
);

export default VisitedCountries;

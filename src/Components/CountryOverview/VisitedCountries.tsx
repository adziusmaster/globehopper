import { AnchorLinkWidget } from "../AnchorLink/AnchorLinkWidget";
import {
  ButtonSpecialNoDivWidget,
  ButtonSpecialWidget,
} from "../Button/ButtonWidget";
import SvgWidget from "../SvgWidget/SvgWidget";
import { CountriesProps, CountryOverviewProps } from "./CountryOverviewState";
import * as Icons from "react-bootstrap-icons";

const VisitedCountries = (props: CountriesProps): JSX.Element => (
  <>
    {props.countries.map((country) => (
      <>
        <li className="overview__item">
          <article className="teaser teaser--country checked starred">
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
                  {SvgWidget({
                    className: "teaser__check checked",
                    width: "48px",
                    height: "48px",
                    href: "#icon--check",
                  })}
                  <div className="teaser__amount">
                    <span className="sr-text">
                      Number of visits to {country.name.common}:{" "}
                    </span>{" "}
                    {country.howManyVisits}
                    <span aria-hidden="true">x</span>
                  </div>
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
                  {ButtonSpecialNoDivWidget({
                    key: "addToFav",
                    onClick: () => console.log("add to trip"),
                    classNameButton: "teaser__action teaser__add",
                    aria: `Add ${country.name.official} to the new trip`,
                    Svg: SvgWidget({
                      className: "teaser__icon",
                      width: "24px",
                      height: "24px",
                      href: "#icon--check",
                    }),
                  })}
                </div>

                <div className="teaser__extras">
                  {ButtonSpecialNoDivWidget({
                    key: "addMoreVisits",
                    onClick: () => console.log("add a visit"),
                    classNameButton: "teaser__action teaser__plus",
                    aria: `Add one more visit to ${country.name.official}`,
                    Svg: (
                      <>
                        <Icons.Star size={24} color="" />
                      </>
                    ),
                  })}

                  {ButtonSpecialNoDivWidget({
                    key: "addToFav",
                    onClick: () => console.log("add to fav"),
                    classNameButton: "teaser__action teaser__star",
                    aria: `Add ${country.name.official} to favourites`,
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

export default VisitedCountries;

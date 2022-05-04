import { ButtonSpecialWidget } from "../Button/ButtonWidget";
import { HeaderProps } from "./HeaderState";

export const HeaderWidget = (props: HeaderProps): JSX.Element => {
  return (
    <header className="header">
      <div className="header__inner container">
        <h1 className="header__title">Countries</h1>
      </div>

      <div className="menu">
        <div className="menu__inner container">
          <ul className="menu__list">
            <li className="menu__item" key="mi-all">
              {ButtonSpecialWidget({
                key: "all",
                onClick: props.onAll,
                classNameButton: `menu__link${
                  props.currentRoute === "all" ? " active" : ""
                }`,
                buttontext: `All (${props.counts.allCountries})`,
              })}
            </li>
            <li className="menu__item" key="mi-visited">
              {ButtonSpecialWidget({
                key: "visited",
                onClick: props.onVisited,
                classNameButton: `menu__link${
                  props.currentRoute === "visited" ? " active" : ""
                }`,
                buttontext: `Visited (${props.counts.VisitedCountries})`,
              })}
            </li>
            <li className="menu__item" key="mi-notvisited">
              {ButtonSpecialWidget({
                key: "not visited",
                onClick: props.onNotVisited,
                classNameButton: `menu__link${
                  props.currentRoute === "notVisited" ? " active" : ""
                }`,
                buttontext: `Not Visited (${props.counts.NotVisitedCountries})`,
              })}
            </li>
            <li className="menu__item" key="mi-wishlist">
              {ButtonSpecialWidget({
                key: "wish list",
                onClick: props.onWishList,
                classNameButton: `menu__link${
                  props.currentRoute === "wishList" ? " active" : ""
                }`,
                buttontext: `Wish List (${props.counts.WishlistCountries})`,
              })}
            </li>
            <li className="menu__item" key="mi-favorites">
              {ButtonSpecialWidget({
                key: "favorites",
                onClick: props.onFavorites,
                classNameButton: `menu__link${
                  props.currentRoute === "favotites" ? " active" : ""
                }`,
                buttontext: `Favorites (${props.counts.FavoritedCountries})`,
              })}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

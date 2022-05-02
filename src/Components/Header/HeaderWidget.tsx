import { ButtonSpecialWidget } from "../Button/ButtonWidget";
import { HeaderProps } from "./HeaderState";

export const HeaderWidget = (props: HeaderProps): JSX.Element => {
  return (
    <header className="header header--login">
      <div className="header__inner container">
        <h1 className="header__title">Countries</h1>
      </div>

      <div className="menu">
        <div className="menu__inner container">
          <ul className="menu__list">
            <li className="menu__item">
              {ButtonSpecialWidget({
                key: "visited",
                onClick: props.onVisited,
                classNameButton: "menu__link",
                buttontext: "Visited",
              })}
            </li>
            <li className="menu__item">
              {ButtonSpecialWidget({
                key: "not visited",
                onClick: props.onNotVisited,
                classNameButton: "menu__link",
                buttontext: "Not Visited",
              })}
            </li>
            <li className="menu__item">
              {ButtonSpecialWidget({
                key: "wish list",
                onClick: props.onWishList,
                classNameButton: "menu__link",
                buttontext: "Wish List",
              })}
            </li>
            <li className="menu__item">
              {ButtonSpecialWidget({
                key: "favorites",
                onClick: props.onFavorites,
                classNameButton: "menu__link",
                buttontext: "Favorites",
              })}
            </li>
            <li className="menu__item">
              {ButtonSpecialWidget({
                key: "all",
                onClick: props.onAll,
                classNameButton: "menu__link",
                buttontext: "All",
              })}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
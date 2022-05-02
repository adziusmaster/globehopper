import { Routes } from "../../App";

export type HeaderProps = {
  onVisited: () => void;
  onNotVisited: () => void;
  onWishList: () => void;
  onFavorites: () => void;
  onAll: () => void;
  currentRoute: Routes
};

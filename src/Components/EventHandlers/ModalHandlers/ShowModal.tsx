import { Action } from "widgets-for-react";
import { AppState } from "../../../App";

export const HandleShowModal: Action<AppState> = (state: AppState) => {
  console.log("modal");
  return {
    ...state,
    modalVisible: true,
  };
};

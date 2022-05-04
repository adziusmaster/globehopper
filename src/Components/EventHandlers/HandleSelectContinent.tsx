import { Action, Fun } from "widgets-for-react";
import { AppState } from "../../App";

export const HandleContinentChange: Fun<
  React.ChangeEvent<HTMLSelectElement>,
  Action<AppState>
> = (event: React.ChangeEvent<HTMLSelectElement>) => (state: AppState) => {
  let newState: AppState = {
    ...state,
    selectedContinent: event.currentTarget.value,
  };

  return newState;
};

export const HandleOnClear: Action<AppState> = (state: AppState) => {
  let newState: AppState = {
    ...state,
    selectedContinent: "All",
  };

  return newState;
};

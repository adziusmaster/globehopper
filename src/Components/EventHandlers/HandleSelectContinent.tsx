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

export const HandleOnClearSearch: Action<AppState> = (state: AppState) => {
  let newState: AppState = {
    ...state,
    searchedName: '',
  };

  return newState;
};

export const HandleOnSearch: Fun<
  React.ChangeEvent<HTMLInputElement>,
  Action<AppState>
> = (event: React.ChangeEvent<HTMLInputElement>) => (state: AppState) => {
  let newState: AppState = {
    ...state,
    searchedName: event.currentTarget.value,
  };

  return newState;
};

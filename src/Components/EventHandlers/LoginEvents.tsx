import { Fun, Action } from "widgets-for-react";
import { AppState } from "../../App";

export const HandleEmail: Fun<
  React.ChangeEvent<HTMLInputElement>,
  Action<AppState>
> = (event: React.ChangeEvent<HTMLInputElement>) => (state: AppState) => ({
  ...state,
  email: event.currentTarget.value,
});

export const HandlePassword: Fun<
  React.ChangeEvent<HTMLInputElement>,
  Action<AppState>
> = (event: React.ChangeEvent<HTMLInputElement>) => (state: AppState) => ({
  ...state,
  password: event.currentTarget.value,
});

export const HandleLogin: Action<AppState> = (state: AppState) => {
  if (state.email === "e" && state.password === "p") {
    return {
      ...state,
      isLogged: true,
    };
  } else
    return {
      ...state,
      isLogged: false,
    };
};

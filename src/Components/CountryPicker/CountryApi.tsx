import { async, HttpResult } from "widgets-for-react";
import { Country } from "./CountryState";

export const fetchCountries = async (): Promise<HttpResult<Country[]>> => {
  try {
    let call = await fetch("https://restcountries.com/v3.1/all");
    let data = await call.json();

    return {
      kind: "result",
      status: 200,
      value: data as Country[],
    };
  } catch (e) {
    console.warn(e);
    return { kind: "failed", status: 500 };
  }
};

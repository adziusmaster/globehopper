import { HttpResult } from "widgets-for-react";
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

export type CountriesWithSubCountries = {
  country: string,
  subCountries: Country[]
}

export const fetchSubCountries:CountriesWithSubCountries[] = [
  {
    country: 'GBR',
    subCountries: [
      {
        continents: 'Europe',
        flags: {
          png: '',
          svg: '',
        },
        name: {
          common: 'Engeland',
          official: 'Engeland'
        },
        cca3: 'GBR-ENG', // Abbrevation
        howManyVisits: 0,
        favourited: false,
        wishList: false,
      },
      {
        continents: 'Europe',
        flags: {
          png: '',
          svg: '',
        },
        name: {
          common: 'Northern Ireland',
          official: 'Northern Ireland'
        },
        cca3: 'GBR-NIR', // Abbrevation
        howManyVisits: 0,
        favourited: false,
        wishList: false,
      },
      {
        continents: 'Europe',
        flags: {
          png: '',
          svg: '',
        },
        name: {
          common: 'Scotland',
          official: 'Scotland'
        },
        cca3: 'GBR-SCO', // Abbrevation
        howManyVisits: 0,
        favourited: false,
        wishList: false,
      },
      {
        continents: 'Europe',
        flags: {
          png: '',
          svg: '',
        },
        name: {
          common: 'Wales',
          official: 'Wales'
        },
        cca3: 'GBR-WAL', // Abbrevation
        howManyVisits: 0,
        favourited: false,
        wishList: false,
      }
    ]
  }
]
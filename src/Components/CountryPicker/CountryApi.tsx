import { HttpResult } from "widgets-for-react";
import { Country, GovernedCountry, SplitCountries, SubCountries } from "./CountryState";

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

// BELOW ARRAY WILL SWAP PARENT COUNTRY WITH SUB COUNTRY/SUBCOUNTRIES
export const fetchSubCountries:SubCountries[] = [
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
          common: 'England',
          official: 'England'
        },
        cca3: 'GBR-ENG', // Abbrevation
        howManyVisits: 0,
        favourited: false,
        wishList: false
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
        wishList: false
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
        wishList: false
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
        wishList: false
      }
    ]
  }
]

// BELOW ARRAY WILL SPLIT COUNTRY INTO MULTIPLE COUNTRIES
export const fetchSplitCountries:SplitCountries[] = [
  {
    country: 'SJM',
    splitCountries: [
      {
        continents: 'Europe',
        flags: {
          png: '',
          svg: 'https://flagcdn.com/no.svg',
        },
        name: {
          common: 'Svalbard',
          official: 'Svalbard'
        },
        cca3: 'SJM-SVA', // Abbrevation
      },
      {
        continents: 'Europe',
        flags: {
          png: '',
          svg: 'https://flagcdn.com/no.svg',
        },
        name: {
          common: 'Jan Mayen',
          official: 'Jan Mayen'
        },
        cca3: 'SJM-JMA', // Abbrevation
      }
    ]
  }
]

// BELOW ARRAY WILL ADD PARENT COUNTRY TO SUB GOVERNED COUNTRY
export const fetchGovernedCountries:GovernedCountry[] = [
  {
    country: 'ALA',
    parentCountry: 'FIN',
    description: 'Autonomous region of'
  },
  {
    country: 'FRO',
    parentCountry: 'DNK',
    description: 'Constituent country of'
  },
  {
    country: 'GIB',
    parentCountry: 'GBR',
    description: 'British Overseas Territory'
  },
  {
    country: 'GGY',
    parentCountry: 'GBR',
    description: 'Crown Dependency of'
  },
  {
    country: 'IMN',
    parentCountry: 'GBR',
    description: 'Crown Dependency of'
  },
  {
    country: 'JEY',
    parentCountry: 'GBR',
    description: 'Crown Dependency of'
  },
  {
    country: 'SJM-SVA',
    parentCountry: 'NOR',
    description: 'Remote jurisdiction of'
  },
  {
    country: 'SJM-JMA',
    parentCountry: 'NOR',
    description: 'Remote jurisdiction of'
  }
]

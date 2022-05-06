import { SplitCountries } from "../CountryState";

export const fetchSplitCountries:SplitCountries[] = [
  {
    country: 'SJM',
    splitCountries: [
      {
        continents: ['Europe'],
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
        continents: ['Europe'],
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

export default fetchSplitCountries;

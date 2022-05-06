import { SplitCountries } from "../CountryState";

export const fetchSplitCountries:SplitCountries[] = [
  // Svalbard and Jan Mayen
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
  },
  // Akrotiri and Dhekelia
  {
    country: 'GBR-A&D',
    splitCountries: [
      {
        continents: ['Europe'],
        flags: {
          png: '',
          svg: 'https://flagcdn.com/gb.svg',
        },
        name: {
          common: 'Akrotiri',
          official: 'Akrotiri'
        },
        cca3: 'GBR-AKR', // Abbrevation
      },
      {
        continents: ['Europe'],
        flags: {
          png: '',
          svg: 'https://flagcdn.com/gb.svg',
        },
        name: {
          common: 'Dhekelia',
          official: 'Dhekelia'
        },
        cca3: 'GBR-DHE', // Abbrevation
      }
    ]
  }
]

export default fetchSplitCountries;

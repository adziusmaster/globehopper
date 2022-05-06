import { SubCountries } from "../CountryState";

export const fetchSubCountries:SubCountries[] = [
  {
    // United Kingdom
    country: 'GBR',
    subCountries: [
      {
        continents: ['Europe'],
        flags: {
          png: '',
          svg: 'https://flagcdn.com/gb-eng.svg',
        },
        name: {
          common: 'England',
          official: 'England'
        },
        cca3: 'GBR-ENG', // Abbrevation
        howManyVisits: 0,
        favourited: false,
        wishList: false,
        modalVisible: false
      },
      {
        continents: ['Europe'],
        flags: {
          png: '',
          svg: 'https://flagcdn.com/gb-nir.svg',
        },
        name: {
          common: 'Northern Ireland',
          official: 'Northern Ireland'
        },
        cca3: 'GBR-NIR', // Abbrevation
        howManyVisits: 0,
        favourited: false,
        wishList: false,
        modalVisible: false
      },
      {
        continents: ['Europe'],
        flags: {
          png: '',
          svg: 'https://flagcdn.com/gb-sct.svg',
        },
        name: {
          common: 'Scotland',
          official: 'Scotland'
        },
        cca3: 'GBR-SCO', // Abbrevation
        howManyVisits: 0,
        favourited: false,
        wishList: false,
        modalVisible: false
      },
      {
        continents: ['Europe'],
        flags: {
          png: '',
          svg: 'https://flagcdn.com/gb-wls.svg',
        },
        name: {
          common: 'Wales',
          official: 'Wales'
        },
        cca3: 'GBR-WAL', // Abbrevation
        howManyVisits: 0,
        favourited: false,
        wishList: false,
        modalVisible: false
      }
    ],
  }
]

export default fetchSubCountries;

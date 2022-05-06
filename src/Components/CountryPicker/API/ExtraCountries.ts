import { Country } from "../CountryState";

export const fetchExtraCountries:Country[] = [
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
    howManyVisits: 0,
    favourited: false,
    wishList: false,
    modalVisible: false
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
    howManyVisits: 0,
    favourited: false,
    wishList: false,
    modalVisible: false
  }
]

export default fetchExtraCountries;
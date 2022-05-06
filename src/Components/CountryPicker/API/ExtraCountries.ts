import { Country } from "../CountryState";

export const fetchExtraCountries:Country[] = [
  {
    continents: ['Europe'],
    flags: {
      png: '',
      svg: 'https://flagcdn.com/gb.svg',
    },
    name: {
      common: 'Akrotiri and Dhekelia',
      official: 'Akrotiri and Dhekelia'
    },
    cca3: 'GBR-A&D', // Abbrevation
    howManyVisits: 0,
    favourited: false,
    wishList: false,
    modalVisible: false
  }
]

export default fetchExtraCountries;
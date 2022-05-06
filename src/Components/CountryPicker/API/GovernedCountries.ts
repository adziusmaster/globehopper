import { GovernedCountries } from "../CountryState";

export const fetchGovernedCountries:GovernedCountries[] = [
  // FINLAND
  {
    country: 'ALA',
    parentCountry: 'FIN',
    description: 'Autonomous Region of'
  },
  // DENMARK
  {
    country: 'FRO',
    parentCountry: 'DNK',
    description: 'Constituent Country of'
  },
  {
    country: 'GRL',
    parentCountry: 'DNK',
    description: 'Constituent Country of'
  },
  // NORWAY
  {
    country: 'SJM-SVA',
    parentCountry: 'NOR',
    description: 'Svalbard and Jan Mayen, Remote jurisdiction of'
  },
  {
    country: 'SJM-JMA',
    parentCountry: 'NOR',
    description: 'Svalbard and Jan Mayen, Remote jurisdiction of'
  },
  {
    country: 'BVT',
    parentCountry: 'NOR',
    description: 'Dependent Territory of'
  },
  // UNITED KINGDOM
  {
    country: 'GIB',
    parentCountry: 'GBR',
    description: 'British Overseas Territory'
  },
  {
    country: 'SGS',
    parentCountry: 'GBR',
    description: 'British Overseas Territory'
  },
  {
    country: 'GBR-AKR',
    parentCountry: 'GBR',
    description: 'Akrotiri and Dhekelia, British Overseas Territory'
  },
  {
    country: 'GBR-DHE',
    parentCountry: 'GBR',
    description: 'Akrotiri and Dhekelia, British Overseas Territory'
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
  // FRANCE
  {
    country: 'ATF',
    parentCountry: 'FRA',
    description: 'Overseas Territory of'
  },
  // AUSTRALIA
  {
    country: 'HMD',
    parentCountry: 'AUS',
    description: 'External Territory of'
  },
]

export default fetchGovernedCountries;

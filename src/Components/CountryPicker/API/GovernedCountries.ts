import { GovernedCountries } from "../CountryState";

export const fetchGovernedCountries:GovernedCountries[] = [
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
    country: 'GRL',
    parentCountry: 'DNK',
    description: 'Constituent country of'
  },
  {
    country: 'GIB',
    parentCountry: 'GBR',
    description: 'British Overseas Territory'
  },
  {
    country: 'GBR-AKR',
    parentCountry: 'GBR',
    description: 'Sovereign Base Areas of Akrotiri and Dhekelia, British Overseas Territory'
  },
  {
    country: 'GBR-DHE',
    parentCountry: 'GBR',
    description: 'Sovereign Base Areas of Akrotiri and Dhekelia, British Overseas Territory'
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
    description: 'Svalvard and Jan Mayen, Remote jurisdiction of'
  },
  {
    country: 'SJM-JMA',
    parentCountry: 'NOR',
    description: 'Svalvard and Jan Mayen, Remote jurisdiction of'
  }
]

export default fetchGovernedCountries;

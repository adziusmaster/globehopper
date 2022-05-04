export type SortAndFilterProps = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
export type Continent =
  | "All"
  | "Africa"
  | "Asia"
  | "Europe"
  | "South America"
  | "North America"
  | "Oceania"
  | "Antarctica";

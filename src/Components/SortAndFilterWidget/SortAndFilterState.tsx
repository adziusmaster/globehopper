export type SortAndFilterProps = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onClear: () => void;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedContinent: string;
  searchedName: string;
};

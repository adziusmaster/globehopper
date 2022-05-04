export type SortAndFilterProps = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onClear: () => void;
  selectedContinent: string;
};

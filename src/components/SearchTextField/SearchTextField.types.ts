export interface SearchTextFieldProps {
  placeholder: string;
  value?: string;
  onSearch: (searchText: string) => void;
}

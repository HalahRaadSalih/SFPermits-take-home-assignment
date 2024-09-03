/**
 * SearchTextFieldProps
 */
export interface SearchTextFieldProps {
  /**
   * The placeholder of the search text field.
   * @type {string}
   */
  placeholder: string;
  /**
   * The value of the search text field.
   * @type {string|undefined}
   * @default ""
   */
  value?: string;
  /**
   * Callback to change the search text value.
   * @param {string} searchText The new search text value.
   */
  onSearch: (searchText: string) => void;
}

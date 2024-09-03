import { InputAdornment, TextField } from "@mui/material";
import { SearchTextFieldProps } from "./SearchTextField.types";
import SearchIcon from "@mui/icons-material/Search";

/**
 *
 * @param {SearchTextFieldProps} props
 * @returns {JSX.Element}
 */
export const SearchTextField = (prop: SearchTextFieldProps): JSX.Element => {
  const { onSearch, value, placeholder } = prop;

  return (
    <TextField
      fullWidth
      autoFocus
      placeholder={placeholder}
      value={value}
      onChange={(event) => onSearch(event.target.value)}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

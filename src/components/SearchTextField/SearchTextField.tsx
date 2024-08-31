import { InputAdornment, TextField } from "@mui/material";
import { SearchTextFieldProps } from "./SearchTextField.types";
import SearchIcon from "@mui/icons-material/Search";

export const SearchTextField = (prop: SearchTextFieldProps) => {
  const { onSearch, value, placeholder } = prop;

  return (
    <TextField
      fullWidth
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

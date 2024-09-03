import {
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { MobileFoodFacilityPermitFiltersProps } from "./MobileFoodFacilityPermitFilters.types";
import { SearchTextField } from "../SearchTextField";
import { STATUS_OPTIONS } from "./MobileFoodFacilityPermitFilters.constants";

/**
 * MobileFoodFacilityPermitFilters component
 * @param {MobileFoodFacilityPermitFiltersProps} props
 * @returns {JSX.Element}
 */
export const MobileFoodFacilityPermitFilters = (
  props: MobileFoodFacilityPermitFiltersProps
): JSX.Element => {
  const { onFilter, filters } = props;
  return (
    <Grid2 container spacing={2} margin={2}>
      <Grid2 size={5}>
        <SearchTextField
          key={filters?.applicant}
          placeholder="Search by applicant"
          value={filters?.applicant}
          onSearch={(applicant: string) => {
            onFilter({ applicant });
          }}
        />
      </Grid2>
      <Grid2 size={5}>
        <SearchTextField
          key={filters?.address}
          placeholder="Search by address"
          value={filters?.address}
          onSearch={(address: string) => {
            onFilter({ address });
          }}
        />
      </Grid2>
      <Grid2 size={2}>
        <FormControl fullWidth>
          <InputLabel id="status">Status</InputLabel>
          <Select
            labelId="status"
            label="Status"
            defaultValue=""
            name="status"
            value={filters?.status}
            onChange={(event) => {
              onFilter({ status: event.target.value as string });
            }}
          >
            {STATUS_OPTIONS.map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid2>
    </Grid2>
  );
};

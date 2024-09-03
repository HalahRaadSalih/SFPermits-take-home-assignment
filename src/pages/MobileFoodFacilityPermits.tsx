import { Box, Grid2 } from "@mui/material";
import { MobileFoodFacilityPermitDataGrid } from "../components/MobileFoodFacilityPermitDataGrid";
import {
  MobileFoodFacilityPermitFilter,
  MobileFoodFacilityPermitFilters,
} from "../components/MobileFoodFacilityPermitFilters";
import { MobileFoodFacilityPermitAppBar } from "../components/MobileFoodFacilityPermitAppBar";
import { useMobileFoodFacilityPermitData } from "../hooks/useMobileFoodFacilityPermitData";

/**
 * The MobileFoodFacilityPermits page.
 * @returns {JSX.Element}
 */
export const MobileFoodFacilityPermits = (): JSX.Element => {
  const {
    data,
    isLoading,
    isError,
    rowCount,
    pageModel,
    setPageModel,
    filters,
    onFiltersChange,
    onSortingChange,
  } = useMobileFoodFacilityPermitData();

  if (isError) {
    return <div>Error</div>;
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: 1,
        minHeight: "100vh",
        flexDirection: "column",
        height: "100%",
        width: "100vw",
      }}
    >
      <MobileFoodFacilityPermitAppBar />
      <Grid2 container spacing={2}>
        <Grid2 size={12}>
          <MobileFoodFacilityPermitFilters
            filters={filters}
            onFilter={(filtersData: MobileFoodFacilityPermitFilter) => {
              onFiltersChange(filtersData);
            }}
          />
        </Grid2>
        <Grid2 size={12}>
          <MobileFoodFacilityPermitDataGrid
            data={data}
            isLoading={isLoading}
            rowCount={Number(rowCount)}
            pageModel={pageModel}
            onPaginationModelChange={setPageModel}
            onSortModelChange={onSortingChange}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
};

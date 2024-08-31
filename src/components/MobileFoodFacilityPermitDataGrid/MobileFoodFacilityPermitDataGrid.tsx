import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { MobileFoodFacilityPermitDataGridProps } from "./MobileFoodFacilityPermitDataGrid.types";
import { COLUMNS } from "./MobileFoodFacilityPermitDataGrid.contants";
import { getRowId } from "./MobileFoodFacilityPermitDataGrid.utils";

export const MobileFoodFacilityPermitDataGrid = (
  props: MobileFoodFacilityPermitDataGridProps
) => {
  const {
    data,
    isLoading,
    rowCount,
    pageModel,
    onPaginationModelChange,
    onSortModelChange,
  } = props;
  return (
    <DataGrid
      rows={data}
      columns={COLUMNS}
      getRowId={getRowId}
      loading={isLoading}
      rowCount={rowCount}
      paginationMode="server"
      sortingMode="server"
      paginationModel={pageModel}
      pageSizeOptions={[20]}
      onPaginationMetaChange={(model) => {
        console.log({ model });
      }}
      onPaginationModelChange={onPaginationModelChange}
      onSortModelChange={onSortModelChange}
      disableColumnFilter
      slots={{ toolbar: GridToolbar }}
      slotProps={{
        loadingOverlay: {
          variant: "linear-progress",
          noRowsVariant: "linear-progress",
        },
      }}
    />
  );
};

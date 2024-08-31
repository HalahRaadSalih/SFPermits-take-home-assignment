import {
  GridPaginationModel,
  GridCallbackDetails,
  GridSortModel,
} from "@mui/x-data-grid";
import { MobileFoodFacilityPermit } from "../../hooks/useMobileFoodFacilityPermitData";

export interface MobileFoodFacilityPermitDataGridProps {
  data: MobileFoodFacilityPermit[];
  isLoading: boolean;
  rowCount: number;
  pageModel: GridPaginationModel;
  onPaginationModelChange: (
    model: GridPaginationModel,
    details: GridCallbackDetails
  ) => void;
  onSortModelChange?:
    | ((model: GridSortModel, details: GridCallbackDetails) => void)
    | undefined;
}

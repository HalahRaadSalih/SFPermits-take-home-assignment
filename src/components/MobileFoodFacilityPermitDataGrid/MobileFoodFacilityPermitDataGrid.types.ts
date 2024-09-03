import {
  GridPaginationModel,
  GridCallbackDetails,
  GridSortModel,
} from "@mui/x-data-grid";
import { MobileFoodFacilityPermit } from "../../hooks/useMobileFoodFacilityPermitData";

/**
 * The props of the MobileFoodFacilityPermitDataGrid component.
 */
export interface MobileFoodFacilityPermitDataGridProps {
  /**
   * The data to display in the grid.
   * @type {MobileFoodFacilityPermit[]}
   */
  data: MobileFoodFacilityPermit[];
  /**
   * The loading state of the grid.
   * @type {boolean}
   */
  isLoading: boolean;
  /**
   * The row count of the grid.
   * @type {number}
   */
  rowCount: number;
  /**
   * The pagination model of the grid.
   * @type {GridPaginationModel}
   */
  pageModel: GridPaginationModel;
  /**
   * Callback to change the pagination model of data the grid.
   * @param {model: GridPaginationModel} model The new pagination model to apply to the data grid.
   * @param {details: GridCallbackDetails} details The details of the callback.
   */
  onPaginationModelChange: (
    model: GridPaginationModel,
    details: GridCallbackDetails
  ) => void;
  /**
   * Callback to change the sort model of the data grid.
   * @param {model: GridSortModel} model The new sort model to apply to the data grid.
   * @param {details: GridCallbackDetails} details The details of the callback.
   */
  onSortModelChange?:
    | ((model: GridSortModel, details: GridCallbackDetails) => void)
    | undefined;
}

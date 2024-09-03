import { GridSortModel } from "@mui/x-data-grid";
import { MobileFoodFacilityPermitFilter } from "../../components/MobileFoodFacilityPermitFilters";
import { MobileFoodFacilityPermit } from "../useMobileFoodFacilityPermitQueryData";

/**
 * The return type of the useMobileFoodFacilityPermitData hook
 * @typedef {Object} useMobileFoodFacilityPermitDataReturn
 */
export interface useMobileFoodFacilityPermitDataReturn {
  /**
   * The data to be displayed
   * @type {MobileFoodFacilityPermit[]}
   * @default []
   */
  data: MobileFoodFacilityPermit[];
  /**
   * The loading state of the data
   * @type {boolean}
   */
  isLoading: boolean;
  /**
   * The error state of the data
   * @type {boolean}
   */
  isError: boolean;
  /**
   * The total number of rows
   * @type {number}
   */
  rowCount: number;
  /**
   * The page model
   * @type {{ page: number; pageSize: number }}
   * @default { page: 0, pageSize: 20 }
   */
  pageModel: { page: number; pageSize: number };
  /**
   * The function to set the page model
   * @type {(pageModel: { page: number; pageSize: number }) => void}
   */
  setPageModel: (pageModel: { page: number; pageSize: number }) => void;
  /**
   * The filters to be applied
   * @type {MobileFoodFacilityPermitFilter | null}
   */
  filters: MobileFoodFacilityPermitFilter | null;
  /**
   * The function to change the filters
   * @type {(filters: MobileFoodFacilityPermitFilter) => void}
   */
  onFiltersChange: (filters: MobileFoodFacilityPermitFilter) => void;
  /**
   * The function to change the sorting
   * @type {(sortModel: GridSortModel) => void}
   */
  onSortingChange: (sortModel: GridSortModel) => void;
}

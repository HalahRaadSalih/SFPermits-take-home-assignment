import { MobileFoodFacilityPermitFilter } from "../../components/MobileFoodFacilityPermitFilters";

/**
 * The return type of the useMobileFoodFacilityPermitFilters hook.
 */
export interface UseMobileFoodFacilityPermitFiltersReturn {
  /**
   * query parameters that are used to filter the mobile food facility permit data.
   * @type {string}
   * @default ""
   */
  queryParams: string;
  /**
   * The current filters that are applied to the mobile food facility permit data.
   * @type {MobileFoodFacilityPermitFilter | null}
   * @default null
   */
  filters: MobileFoodFacilityPermitFilter | null;
  /**
   * Callback to change the filters of the mobile food facility permit data.
   * @param {MobileFoodFacilityPermitFilter} filter The new filters to apply to the mobile food facility permit data.
   */
  onFiltersChange: (filter: MobileFoodFacilityPermitFilter) => void;
}

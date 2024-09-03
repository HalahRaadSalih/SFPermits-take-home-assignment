/**
 * MobileFoodFacilityPermitFilter
 */
export interface MobileFoodFacilityPermitFilter {
  /**
   * The applicant to filter by.
   * @type {string | undefined}
   * @default ""
   */
  applicant?: string;
  /**
   * The address to filter by.
   * @type {string | undefined}
   * @default ""
   */
  address?: string;
  /**
   * The status to filter by.
   * @type {string | undefined}
   * @default ""
   */
  status?: string;
}
/**
 * MobileFoodFacilityPermitFilters component props
 * @param {MobileFoodFacilityPermitFiltersProps} props
 */
export interface MobileFoodFacilityPermitFiltersProps {
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
  onFilter: (filter: MobileFoodFacilityPermitFilter) => void;
}

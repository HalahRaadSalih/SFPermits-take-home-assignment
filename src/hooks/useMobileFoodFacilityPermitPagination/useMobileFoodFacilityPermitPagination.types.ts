/**
 * @description
 * This is the return type of the useMobileFoodFacilityPermitPagination hook
 */
export interface UseMobileFoodFacilityPermitPaginationReturn {
  /**
   * The offset of the mobile food facility permit data
   * @type {number}
   */
  offset: number;
  /**
   * The page model of the mobile food facility permit data
   * @type {{ page: number; pageSize: number }}
   */
  pageModel: {
    page: number;
    pageSize: number;
  };
  /**
   * Callback to change the page model of the mobile food facility permit data
   * @param {pageModel: { page: number; pageSize: number }} pageModel The new page model to apply to the mobile food facility permit data.
   */
  setPageModel: (pageModel: { page: number; pageSize: number }) => void;
}

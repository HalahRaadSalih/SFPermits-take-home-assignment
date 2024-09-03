import { useState } from "react";
import {
  DEFAULT_OFFSET,
  PAGINATION_LIMIT,
} from "../useMobileFoodFacilityPermitData";
import { UseMobileFoodFacilityPermitPaginationReturn } from "./useMobileFoodFacilityPermitPagination.types";

/**
 * Hook to manage mobile food facility permit pagination state
 * @returns {UseMobileFoodFacilityPermitPaginationReturn}
 * @example
 * const { offset, pageModel, setPageModel } = useMobileFoodFacilityPermitPagination();
 */
export const useMobileFoodFacilityPermitPagination =
  (): UseMobileFoodFacilityPermitPaginationReturn => {
    const [pageModel, setPageModel] = useState({
      page: DEFAULT_OFFSET,
      pageSize: PAGINATION_LIMIT,
    });

    return {
      offset: pageModel.page * pageModel.pageSize,
      pageModel,
      setPageModel,
    };
  };

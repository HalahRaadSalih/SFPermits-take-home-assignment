import { GridSortModel } from "@mui/x-data-grid";
import { useState, useRef, useMemo, useCallback } from "react";
import { useMobileFoodFacilityPermitFilters } from "../useMobileFoodFacilityPermitFilters";
import { useMobileFoodFacilityPermitPagination } from "../useMobileFoodFacilityPermitPagination";
import {
  SortMode,
  useMobileFoodFacilityPermitQueryData,
  SortModeOrder,
} from "../useMobileFoodFacilityPermitQueryData";
import { useMobileFoodFacilityPermitDataReturn } from "./useMobileFoodFacilityPermitData.types";

/**
 * Hook to manage mobile food facility permit data state
 * @returns {useMobileFoodFacilityPermitDataReturn}
 * @example
 * const { data, isLoading, isError, rowCount, pageModel, setPageModel, filters, onFiltersChange, onSortingChange } = useMobileFoodFacilityPermitData();
 */
export const useMobileFoodFacilityPermitData =
  (): useMobileFoodFacilityPermitDataReturn => {
    const { filters, queryParams, onFiltersChange } =
      useMobileFoodFacilityPermitFilters();
    const [sort, setSort] = useState<SortMode | undefined>(undefined);
    const { offset, pageModel, setPageModel } =
      useMobileFoodFacilityPermitPagination();
    const { data, isLoading, isError, count } =
      useMobileFoodFacilityPermitQueryData({
        offset,
        sort,
        queryParams,
      });

    /**
     * @author: Halah
     * @see https://mui.com/x/react-data-grid/pagination/#index-based-pagination
     * count fetching is zero when the data is loading, which rests page model to page 0
     * Following lines are here to prevent `count` from being 0 during the loading
     */
    const rowCountRef = useRef(count);
    const rowCount = useMemo(() => {
      if (count !== 0) {
        rowCountRef.current = count;
      }
      return rowCountRef.current;
    }, [count]);

    const onSortingChange = useCallback((sortModel: GridSortModel) => {
      setSort({
        field: sortModel[0].field,
        order: sortModel[0].sort as SortModeOrder,
      });
    }, []);
    return {
      data,
      isLoading,
      isError,
      rowCount,
      pageModel,
      setPageModel,
      filters,
      onFiltersChange,
      onSortingChange,
    };
  };

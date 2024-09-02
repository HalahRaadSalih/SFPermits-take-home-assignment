import { useState, useCallback } from "react";
import { useDebounceValue } from "usehooks-ts";
import { MobileFoodFacilityPermitFilter } from "../../components/MobileFoodFacilityPermitFilters";
import { generateQueryParams } from "../useMobileFoodFacilityPermitData/useMobileFoodFacilityPermitData";
import { UseMobileFoodFacilityPermitFiltersReturn } from "./useMobileFoodFacilityPermitFilters.types";

const USE_DEOUNCE_VALUE_DEFAULT_DELAY = 500;
/**
 * Hook to manage mobile food facility permit filters state
 * @returns {UseMobileFoodFacilityPermitFiltersReturn}
 * @example
 * const { filters, queryParams, onFiltersChange } = useMobileFoodFacilityPermitFilters();
 */
export const useMobileFoodFacilityPermitFilters =
  (): UseMobileFoodFacilityPermitFiltersReturn => {
    const [queryParams, setQueryParams] = useDebounceValue(
      "",
      USE_DEOUNCE_VALUE_DEFAULT_DELAY
    );
    const [filters, setFilters] =
      useState<MobileFoodFacilityPermitFilter | null>(null);

    const onFiltersChange = useCallback(
      (filtersData: MobileFoodFacilityPermitFilter) => {
        const newQueryParams = !filters
          ? generateQueryParams(filtersData)
          : generateQueryParams({ ...filters, ...filtersData });
        setQueryParams(newQueryParams);
        setFilters((prevFilters) => {
          return { ...prevFilters, ...filtersData };
        });
      },
      [filters, setQueryParams]
    );
    return { filters, queryParams, onFiltersChange };
  };

import { useQueries } from "@tanstack/react-query";
import {
  UseMobileFoodFacilityPermitDataProps,
  UseMobileFoodFacilityPermitDataReturn,
} from "./useMobileFoodFacilityPermitData.types";
import {
  PAGINATION_LIMIT,
  DEFAULT_OFFSET,
  MOBILE_FOOD_FACILITY_PERMIT_URL,
} from "./useMobileFoodFacilityPermitData.constants";

/**
 * Hook to fetch mobile food facility permit data
 * @param {UseMobileFoodFacilityPermitDataProps} props
 * @returns {UseMobileFoodFacilityPermitDataReturn}
 * @example
 * const { data, isLoading, isError, count } = useMobileFoodFacilityPermitData();
 */
export const useMobileFoodFacilityPermitData = (
  props: UseMobileFoodFacilityPermitDataProps
): UseMobileFoodFacilityPermitDataReturn => {
  const { offset = DEFAULT_OFFSET, queryParams, sort } = props;
  const sortParams = sort ? `order by ${sort.field} ${sort.order}` : "";
  const queries = [
    {
      params: `select * ${
        queryParams || ""
      }  ${sortParams} limit ${PAGINATION_LIMIT} offset ${offset}`,
      keys: [`mobileFoodFacilityPermitData`, offset, queryParams, sort],
    },
    {
      params: `select count(*) as count ${queryParams || ""}`,
      keys: [`mobileFoodFacilityPermitData`, queryParams],
    },
  ];
  const [
    { data, isLoading, isError },
    { data: countData, isLoading: countIsLoading, isError: countIsError },
  ] = useQueries({
    queries: queries.map((query) => ({
      queryKey: [query.keys, query.params],
      queryFn: async () => {
        const response = await fetch(
          `${MOBILE_FOOD_FACILITY_PERMIT_URL}&$query=${query.params}`,
          {
            headers: {
              "X-App-Token": import.meta.env.VITE_APP_TOKEN,
            },
          }
        );
        return response.json();
      },
    })),
  });

  return {
    data: data,
    isLoading: isLoading || countIsLoading,
    isError: isError || countIsError,
    count: isLoading || countIsLoading ? 0 : countData[0].count,
  };
};

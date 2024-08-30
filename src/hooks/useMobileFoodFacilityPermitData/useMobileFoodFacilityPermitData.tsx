import { useQuery } from "@tanstack/react-query";
import {
  UseMobileFoodFacilityPermitDataProps,
  UseMobileFoodFacilityPermitDataReturn,
} from "./useMobileFoodFacilityPermitData.types";
import {
  PAGINATION_LIMIT,
  DEFAULT_OFFSET,
  MOBILE_FOOD_FACILITY_PERMIT_URL,
} from "./useMobileFoodFacilityPermitData.constants";

export const useMobileFoodFacilityPermitData = (
  props: UseMobileFoodFacilityPermitDataProps
): UseMobileFoodFacilityPermitDataReturn => {
  const { offset = DEFAULT_OFFSET, queryParams } = props;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["mobileFoodFacilityPermit"],
    queryFn: async ({ pageParam }) => {
      // todo - add error handling
      // todo - send API key in headers because it's more secure, header information isn't exposed in browser history or logs
      // todo - add sorting
      // todo - add filtering
      const response = await fetch(
        `${MOBILE_FOOD_FACILITY_PERMIT_URL}${
          import.meta.env.VITE_APP_TOKEN
        }&$limit=${PAGINATION_LIMIT}&$offset=${pageParam || offset}&${
          queryParams || ""
        }`
      );

      return response.json();
    },
  });

  return {
    data: data,
    isLoading: isLoading,
    isError: isError,
  };
};

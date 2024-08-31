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
import { MobileFoodFacilityPermitFilter } from "../../components/MobileFoodFacilityPermitFilters";

const QUERY_PARAMS_GENERATOR = {
  applicant: (applicant: string) =>
    `(upper(applicant) like upper('%25${applicant}%25'))`,
  address: (address: string) =>
    `(upper(address) like upper('%25${address}%25'))`,
  status: (status: string) => `status='${status}'`,
};

export const generateQueryParams = (
  filters: MobileFoodFacilityPermitFilter
) => {
  const { applicant, address, status } = filters;
  if (!applicant && !address && !status) {
    return "";
  }

  const queryParams = [];

  if (applicant) {
    queryParams.push(QUERY_PARAMS_GENERATOR["applicant"](applicant));
  }
  if (address) {
    queryParams.push(QUERY_PARAMS_GENERATOR["address"](address));
  }
  if (status) {
    queryParams.push(QUERY_PARAMS_GENERATOR["status"](status));
  }
  let whereClause = `where (${queryParams})`;

  if (queryParams.length === 1) {
    whereClause = `where (${queryParams[0]})`;
  }

  whereClause = `where (${queryParams.join(" and ")})`;

  return whereClause;
};
export const useMobileFoodFacilityPermitData = (
  props: UseMobileFoodFacilityPermitDataProps
): UseMobileFoodFacilityPermitDataReturn => {
  // todo move queryParams here
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

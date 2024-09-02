import { MobileFoodFacilityPermitFilter } from "../../components/MobileFoodFacilityPermitFilters";

/**
 * The query params generator for the mobile food facility permit data.
 */
export const QUERY_PARAMS_GENERATOR = {
  applicant: (applicant: string) =>
    `(upper(applicant) like upper('%25${applicant}%25'))`,
  address: (address: string) =>
    `(upper(address) like upper('%25${address}%25'))`,
  status: (status: string) => `status='${status}'`,
};

/**
 * Generate SoQL query params based on the filters
 * @param {MobileFoodFacilityPermitFilter} filters The filters to apply to the query params.
 * @returns {string} The query params to apply to the mobile food facility permit data.
 */
export const generateQueryParams = (
  filters: MobileFoodFacilityPermitFilter
) => {
  if (!filters) {
    return "";
  }

  const { applicant, address, status } = filters;
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

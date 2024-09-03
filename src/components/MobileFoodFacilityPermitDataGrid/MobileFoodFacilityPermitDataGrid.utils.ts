import { MobileFoodFacilityPermit } from "../../hooks/useMobileFoodFacilityPermitQueryData/useMobileFoodFacilityPermitQueryData.types";

/**
 * Get the row id of a mobile food facility permit
 * @param {MobileFoodFacilityPermit} row The mobile food facility permit
 * @returns {string} The row id
 */
export const getRowId = (row: MobileFoodFacilityPermit) => {
  return row.objectid;
};

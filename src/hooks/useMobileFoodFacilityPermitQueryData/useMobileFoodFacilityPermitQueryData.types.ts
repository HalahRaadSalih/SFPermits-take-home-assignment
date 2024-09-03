export type SortModeOrder = "asc" | "desc";

/**
 * The sort mode of the mobile food facility permit data.
 */
export interface SortMode {
  /**
   * The field to sort the mobile food facility permit data by.
   * @type {string}
   */
  field: string;
  /**
   * The order to sort the mobile food facility permit data by.
   * @type {SortModeOrder}
   */
  order: SortModeOrder;
}

/**
 * The mobile food facility permit data.
 */
export interface UseMobileFoodFacilityPermitDataQueryProps {
  /**
   * The sort mode of the mobile food facility permit data.
   * @type {SortMode}
   * @default undefined
   */
  sort?: SortMode;
  /**
   * The offset of the mobile food facility permit data.
   * @type {number | undefined}
   * @default 0
   */
  offset?: number;
  /**
   * The query parameters to apply to the mobile food facility permit data.
   * @type {strin| undefined}
   * @default ""
   */
  queryParams?: string;
}

/**
 * The mobile food facility permit Location.
 */

interface MobileFoodFacilityPermitLocation {
  /**
   * The latitude of the mobile food facility permit location.
   * @type {string}
   */
  latitude: string;
  /**
   * The longitude of the mobile food facility permit location.
   * @type {string}
   */
  longitude: string;
  /**
   * The human address of the mobile food facility permit location.
   * @type {string}
   */
  human_address: string;
}

/**
 * The mobile food facility permit.
 * @see https://dev.socrata.com/foundry/data.sfgov.org/rqzj-sfat
 */
export interface MobileFoodFacilityPermit {
  /**
   * The address of the mobile food facility permit.
   * @type {string}
   */
  address: string;
  /**
   * The applicant of the mobile food facility permit.
   * @type {string}
   */
  applicant: string;
  /**
   * The approved date of the mobile food facility permit.
   * @type {string}
   */
  approved: string;
  /**
   * The block of the mobile food facility permit.
   * @type {string}
   */
  block: string;
  /**
   * The blocklot of the mobile food facility permit.
   * @type {string}
   */
  blocklot: string;
  /**
   * The cnn of the mobile food facility permit.
   * @type {string}
   */
  cnn: string;
  /**
   * The expiration date of the mobile food facility permit.
   * @type {string}
   */
  expirationdate: string;
  /**
   * The facility type of the mobile food facility permit.
   * @type {string}
   */
  facilitytype: string;
  /**
   * The food items of the mobile food facility permit.
   * @type {string}
   */
  fooditems: string;
  /**
   * The latitude of the mobile food facility permit.
   * @type {string}
   */
  latitude: string;
  /**
   * The location of the mobile food facility permit.
   * @type {MobileFoodFacilityPermitLocation}
   */
  location: MobileFoodFacilityPermitLocation;
  /**
   * The location description of the mobile food facility permit.
   * @type {string}
   */
  locationdescription: string;
  /**
   * The longitude of the mobile food facility permit.
   * @type {string}
   */
  longitude: string;
  /**
   * The lot of the mobile food facility permit.
   * @type {string}
   */
  lot: string;
  /**
   * The object id of the mobile food facility permit.
   * @type {string}
   */
  objectid: string;
  /**
   * The permit of the mobile food facility permit.
   * @type {string}
   */
  permit: string;
  /**
   * The prior permit of the mobile food facility permit.
   * @type {string}
   */
  priorpermit: string;
  /**
   * The received date of the mobile food facility permit.
   * @type {string}
   */
  received: string;
  /**
   * The schedule of the mobile food facility permit.
   * @type {string}
   */
  schedule: string;
  /**
   * The status of the mobile food facility permit.
   * @type {string}
   */
  status: string;
  /**
   * The x coordinate of the mobile food facility permit.
   * @type {string}
   */
  x: string;
  /**
   * The y coordinate of the mobile food facility permit.
   * @type {string}
   */
  y: string;
}

/**
 * The return type of the useMobileFoodFacilityPermitQueryData hook.
 */
export interface UseMobileFoodFacilityPermitQueryDataReturn {
  /**
   * The mobile food facility permit data array.
   * @type {MobileFoodFacilityPermit[]}
   * @default []
   */
  data: MobileFoodFacilityPermit[];
  /**
   * The loading state of the mobile food facility permit data.
   * @type {boolean}
   */
  isLoading: boolean;
  /**
   * The error state of the mobile food facility permit data.
   * @type {boolean}
   */
  isError: boolean;
  /**
   * The total count of the mobile food facility permits.
   * @type {number}
   */
  count: number;
}

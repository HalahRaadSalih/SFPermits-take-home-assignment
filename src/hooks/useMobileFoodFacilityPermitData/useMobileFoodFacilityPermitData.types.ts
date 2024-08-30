export interface UseMobileFoodFacilityPermitDataProps {
  offset?: number;
  queryParams?: string;
}
export interface UseMobileFoodFacilityPermitDataReturn {
  data: MobileFoodFacilityPermit[];
  isLoading: boolean;
  isError: boolean;
}

interface MobileFoodFacilityPermitLocation {
  latitude: string;
  longitude: string;
  human_address: string;
}

export interface MobileFoodFacilityPermit {
  address: string;
  applicant: string;
  approved: string;
  block: string;
  blocklot: string;
  cnn: string;
  expirationdate: string;
  facilitytype: string;
  fooditems: string;
  latitude: string;
  location: MobileFoodFacilityPermitLocation;
  locationdescription: string;
  longitude: string;
  lot: string;
  objectid: string;
  permit: string;
  priorpermit: string;
  received: string;
  schedule: string;
  status: string;
  x: string;
  y: string;
}

export interface MobileFoodFacilityPermitFilter {
  applicant?: string;
  address?: string;
  status?: string;
}
export interface MobileFoodFacilityPermitFiltersProps {
  filters: MobileFoodFacilityPermitFilter | null;
  onFilter: (filter: MobileFoodFacilityPermitFilter) => void;
}

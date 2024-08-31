export interface MobileFoodFacilityPermitFilter {
  applicant?: string;
  address?: string;
  status?: string;
}
export interface MobileFoodFacilityPermitFiltersProps {
  filters: MobileFoodFacilityPermitFilter;
  onFilter: (filter: MobileFoodFacilityPermitFilter) => void;
}

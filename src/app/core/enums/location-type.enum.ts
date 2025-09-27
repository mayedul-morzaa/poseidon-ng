export enum LocationTypeEnum {
  Warehouse = 1,
  Branch = 2,
  Factory = 3,
  HeadOffice = 4
}

export const LocationTypeLabels: Record<LocationTypeEnum, string> = {
  [LocationTypeEnum.Warehouse]: 'Warehouse',
  [LocationTypeEnum.Branch]: 'Branch',
  [LocationTypeEnum.Factory]: 'Factory',
  [LocationTypeEnum.HeadOffice]: 'Head Office'
};

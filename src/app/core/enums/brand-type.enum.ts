export enum BrandTypeEnum {
  Brand = 1,
  Client = 2,
  Vendor = 3,
  Supplier = 4
}

export const BrandTypeLabels: Record<BrandTypeEnum, string> = {
  [BrandTypeEnum.Brand]: 'Brand',
  [BrandTypeEnum.Client]: 'Client',
  [BrandTypeEnum.Vendor]: 'Vendor',
  [BrandTypeEnum.Supplier]: 'Supplier'
};

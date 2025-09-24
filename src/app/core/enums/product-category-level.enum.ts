export enum ProductCategoryLevelEnum {
    Primary = 1,
    Secondary = 2,
    Tertiary = 3
}

export const ProductCategoryLevelLabels: Record<ProductCategoryLevelEnum, string> = {
  [ProductCategoryLevelEnum.Primary]: 'Primary',
  [ProductCategoryLevelEnum.Secondary]: 'Secondary',
  [ProductCategoryLevelEnum.Tertiary]: 'Tertiary'
};
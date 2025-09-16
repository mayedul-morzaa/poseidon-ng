export enum GalleryLevelEnum {
  Parent0 = 1,
  Level1,
  Level2,
  Level3,
  Level4
}

export const GalleryLevelLabels: Record<GalleryLevelEnum, string> = {
  [GalleryLevelEnum.Parent0]: 'Base',
  [GalleryLevelEnum.Level1]: 'Level 1',
  [GalleryLevelEnum.Level2]: 'Level 2',
  [GalleryLevelEnum.Level3]: 'Level 3',
  [GalleryLevelEnum.Level4]: 'Level 4'
};
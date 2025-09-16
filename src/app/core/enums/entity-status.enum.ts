export enum EntityStatusEnum {
  Deleted = 0,
  Active = 1,
  Inactive = 2,
  Draft = 3
}

export const EntityStatusLabels: Record<EntityStatusEnum, string> = {
  [EntityStatusEnum.Deleted]: 'Deleted',
  [EntityStatusEnum.Active]: 'Published',
  [EntityStatusEnum.Inactive]: 'Inactive',
  [EntityStatusEnum.Draft]: 'Draft'
};

// How to Use in Components
// import { EntityStatus, EntityStatusLabels } from 'src/app/core/enums/entity-status.enum';

// const statusText = EntityStatusLabels[EntityStatus.Active]; // "Published"
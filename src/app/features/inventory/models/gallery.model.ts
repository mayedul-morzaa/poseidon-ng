import { EntityStatusEnum} from 'src/app/core/enums/entity-status.enum';
import { GalleryLevelEnum } from 'src/app/core/enums/gallery-level.enum';

export interface GalleryDto {
  id: number;
  parentGalleryId?: number;
  parentName: string;
  galleryLevel: GalleryLevelEnum;
  levelName?: string;
  title: string;
  thumbImage?: File;
  thumbImagePath?: string;
  imageAltText?: string;
  status: EntityStatusEnum;
  statusText?: string;
  editDate?: Date;
  lastUpdateText?: string;
  galleryItems: GalleryItemDto[];
}

export interface GalleryItemDto {
  id?: number;
  galleryInfoId: number;
  galleryName: string;
  title: string;
  thumbImage?: File;
  thumbImagePath?: string;
  bigImage?: File;
  bigImagePath?: string;
  imageAltText?: string;
  status: EntityStatusEnum;
  statusText?: string;
  sortIndex?: number;
  lastUpdateText?: string;
}


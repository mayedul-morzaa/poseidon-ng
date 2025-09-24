import { EntityStatusEnum } from "@/core/enums/entity-status.enum";
import { GalleryLevelEnum } from "@/core/enums/gallery-level.enum";
import { ProductDto } from "./product-dto.model";
import { ProductCategoryDetailsDto } from "./product-category-details-dto.model";

export interface ProductCategoryDto {
  id?: number;

  // Audit fields
  createDate?: string;
  createdBy?: number;
  editDate?: string;
  editedBy?: number;
  status?: EntityStatusEnum;

  // Core fields
  categoryId?: string;
  categoryName: string;
  secondaryName?: string;
  parentCategoryId?: number;
  parentName?: string;

  catLevel?: GalleryLevelEnum;
  levelName?:string;
  thumbImage?: File;
  thumbImagePath?: string;

  iconImage?: File;
  iconImagePath?: string;

  imageAltText?: string;

  statusText?: string;
  lastUpdateText?: string;

  products?: ProductDto[];
  productCategoryDetails?: ProductCategoryDetailsDto[];
}
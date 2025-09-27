import { BrandTypeEnum } from "@/core/enums/brand-type.enum";
import { EntityStatusEnum } from "@/core/enums/entity-status.enum";

export interface BrandDto {
  id?: number;
  createDate: string;
  createdBy?: number;
  editDate?: string;
  editedBy?: number;
  status: EntityStatusEnum;

  name: string;
  thumbImage?: File;
  thumbImagePath?: string;
  webSite?: string;
  brandTypeId: BrandTypeEnum;
  typeName: string;
}

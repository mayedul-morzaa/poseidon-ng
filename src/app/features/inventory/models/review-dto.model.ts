import { EntityStatusEnum } from "@/core/enums/entity-status.enum";

export interface ReviewDto {
  id?: number;
  locationInfoId?: number;
  productInfoId?: number;

  comment: string;
  ratings?: number;

  productName?: string;
  locationName?: string;
  userId?: string;

  createDate: string;
  createdBy?: number;
  editDate?: string;
  editedBy?: number;
  status: EntityStatusEnum;
}

import { EntityStatusEnum } from "@/core/enums/entity-status.enum";
import { ReviewDto } from "./review-dto.model";
import { LocationTypeEnum } from "@/core/enums/location-type.enum";

export interface StoreLocationDto {
  id?: number;
  locationId?: string;
  locationTypeId: LocationTypeEnum;
  locationTypeName?: string;

  locationName: string;
  addressLine1: string;
  addressLine2?: string;
  district: string;
  division: string;

  image?: File;
  imagePath?: string;

  phone: string;
  email: string;
  googleMap?: string;

  reviews?: ReviewDto[];
  createDate: string;
  createdBy?: number;
  editDate?: string;
  editedBy?: number;
  status: EntityStatusEnum;
}

import {CarParts} from "./car-parts";

export interface CarPartRequest {
  carPart: CarParts,
  supplierId: number;
}

import { PartialType } from "@nestjs/mapped-types";
import { ProductCreateDTO } from "./product.create.dto";

export class ProductUpdateDTO extends PartialType(ProductCreateDTO) {
    id: number;
}
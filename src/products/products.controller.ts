import { Controller, ParseIntPipe } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductCreateDTO } from "./dto/product.create.dto";
import { ProductUpdateDTO } from "./dto/product.update.dto";

import { MessagePattern, Payload } from "@nestjs/microservices";

@Controller('products')
export class ProductsController {

    constructor(private readonly service: ProductsService) { }

    @MessagePattern({ cmd: 'findAll' })
    findAll() {
        return this.service.findAll();
    }

    @MessagePattern({ cmd: 'findOne' })
    findOne(@Payload('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @MessagePattern({ cmd: 'create' })
    create(@Payload() data: ProductCreateDTO) {
        return this.service.create(data);
    }

    @MessagePattern({ cmd: 'update' })
    update(@Payload() data: ProductUpdateDTO) {
        return this.service.update(+data.id, data);
    }

    @MessagePattern({ cmd: 'delete' })
    delete(@Payload('id', ParseIntPipe) id: number) {
        return this.service.delete(id);
    }
}
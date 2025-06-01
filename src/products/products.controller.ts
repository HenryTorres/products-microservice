import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductCreateDTO } from "./dto/product.create.dto";
import { ProductUpdateDTO } from "./dto/product.update.dto";

@Controller('products')
export class ProductsController {

    constructor(private readonly service: ProductsService) { }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.service.findOne(+id);
    }

    @Post()
    create(@Body() data: ProductCreateDTO) {
        return this.service.create(data);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() data: ProductUpdateDTO) {
        return this.service.update(+id, data);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.service.delete(+id);
    }


}
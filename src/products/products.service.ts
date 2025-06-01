import { BadRequestException, Injectable, OnModuleInit } from '@nestjs/common';
import { ProductCreateDTO } from './dto/product.create.dto';
import { ProductUpdateDTO } from './dto/product.update.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class ProductsService extends PrismaClient implements OnModuleInit {

    async onModuleInit() {
        await this.$connect();
        console.log('Database connected');
    }

    async findAll() {
        return await this.product.findMany();
    }

    async findOne(id: number) {
        const product = await this.product.findUnique({
            where: { id: id }
        });

        if (!product) {
            throw new BadRequestException(`Producto con ${id} no encontrado`);
        }

        return product;
    }

    async create(productCreateDTO: ProductCreateDTO) {
        return await this.product.create({
            data: productCreateDTO
        });
    }

    async update(id: number, productUpdateDTO: ProductUpdateDTO) {
        await this.findOne(id);

        return await this.product.update({
            where: { id: id },
            data: productUpdateDTO
        })
    }

    async delete(id: number) {
        await this.findOne(id);

        return await this.product.delete({
            where: { id: id }
        })
    }

}

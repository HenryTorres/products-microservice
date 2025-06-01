import { Module } from '@nestjs/common';
import { ProductsController } from './products/products.controller';
import { CategoriesModule } from './categories/categories.module';
import { ProductsService } from './products/products.service';

@Module({
  imports: [CategoriesModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class AppModule { }

import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { StockLogicaController } from './stock-logica/stock-logica.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { ProductoOrmService } from './producto-orm/producto-orm.service';
import { ProductosORMController } from './productosORM.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Producto])],
  controllers: [ProductosController, StockLogicaController, ProductosORMController],
  providers: [ProductosService, ProductoOrmService]
})
export class ProductosModule {}

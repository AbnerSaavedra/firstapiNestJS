import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { StockLogicaController } from './stock-logica/stock-logica.controller';

@Module({
  controllers: [ProductosController, StockLogicaController],
  providers: [ProductosService]
})
export class ProductosModule {}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('stock-logica')
export class StockLogicaController {

      private inventario = [
    { producto: 'Monitor', cantidad: 10 },
    { producto: 'Teclado', cantidad: 25 },
  ];

  @Get(':producto')
  obtenerCantidad(@Param('producto') producto: string) {
    const item = this.inventario.find(i => i.producto === producto);
    return item ? item.cantidad : 0;
  }
  
  @Post()
  agregarProducto(@Body() dto: { producto: string; cantidad: number }) {
    this.inventario.push(dto);
    return { mensaje: 'Producto agregado', producto: dto };
  }

}

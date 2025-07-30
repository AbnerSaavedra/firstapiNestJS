import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
    constructor(private readonly productosService: ProductosService){

    }

   @Get('all')
   getProduct(): any {
    return this.productosService.getProductos()[2][0];
    //return this.productosService.getProductos();
  }
  
  @Get(':id')
  buscarPorId(@Param('id') id: string) {
    const idNum = parseInt(id, 10);
    const producto = this.productosService.getProductoPorID(idNum);

    if (!producto) {
      throw new NotFoundException(`Producto con ID ${idNum} no encontrado`);
    }

    return producto;
  }

}

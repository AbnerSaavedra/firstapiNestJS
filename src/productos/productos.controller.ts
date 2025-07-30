import { Body, Controller, Get, NotFoundException, Param, Post, Query, Headers, HttpException, HttpStatus } from '@nestjs/common';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
    constructor(private readonly productosService: ProductosService){

    }

   @Get('all')
   getProduct(): any {
    //return this.productosService.getProductos()[2][0];
      return this.productosService.getProductos();
  }

@Get('buscar')filtrarPorNombreOPrecio(
  @Query('nombre') nombre?: string,
  @Query('precioMin') precioMin?: string,
) {
  return this.productosService.filtrar(nombre, precioMin);
}
  
  @Get(':id')
  buscarPorId(@Param('id') id: string,
  @Headers('x-token') token: string) {
    const idNum = parseInt(id, 10);
    const producto = this.productosService.getProductoPorID(idNum);

    if (!producto) {
      throw new NotFoundException(`Producto con ID ${idNum} no encontrado`);
    }

    //return producto;

    return {
      mensaje: "producto encontrado",
      producto: producto,
      tokenRecibido: token
    }
  }
  
@Post('')
  crear(@Body() data: { nombre: string; precio: number }) {
    return this.productosService.crearProducto(data);
  }

  @Post('crear')
  crearProducto(
    @Body() data: { nombre: string; precio: number },
    @Headers('authorization') auth: string
  ) {
    if (!auth || !auth.startsWith('Bearer ')) {
      throw new HttpException('Token inválido o ausente', HttpStatus.UNAUTHORIZED);
    }

    return {
      mensaje: 'Producto creado',
      tokenUsado: auth,
      datos: data,
    };
  }

}

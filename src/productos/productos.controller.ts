import { Body, Controller, Get, NotFoundException, Param, Post, Query, Headers, HttpException, HttpStatus, Res, BadRequestException, UseFilters } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { Response } from 'express';
import { ProductoExceptionFilter } from './filters/producto-exception.filter/producto-exception.filter';

@UseFilters(ProductoExceptionFilter)
@Controller('productos')
export class ProductosController {
  //private producService: ProductosService 

    constructor(private readonly productosService: ProductosService){
    
      //this.producService = new ProductosService()
    }

    /*constructor(){
     // Instanciación manual del servicio
      this.producService = new ProductosService()
    }*/


   @Get('all')
   getProduct(): any {
    //return this.productosService.getProductos()[2][0];
      return this.productosService.getProductos();
  }

 @Get('info')
 getInfo(@Headers('user-agent') agente: string){
    return {
      mensaje: "Información del cliente",
      navegador: agente
    }
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
    
    // Se lanza excepción semántica con contexto
    if (!producto) throw new NotFoundException(`Producto con ID ${idNum} no encontrado`);
  

    //return producto;

    return {
      mensaje: "producto encontrado",
      producto: producto,
      tokenRecibido: token
    }
  }

  @Post('crearDTO')
  crearProductoDTO(
    @Body() data: CreateProductoDto, @Res() res: Response
  ) {
    //return this.productosService.crearProductoDTO(data)
    if(this.productosService.crearProductoDTO(data))
      res.status(201).json({"mensaje": "Recurso creado exitosamente"})
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

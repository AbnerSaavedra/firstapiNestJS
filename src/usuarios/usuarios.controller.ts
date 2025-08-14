import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { UsuariosModule } from './usuarios.module';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {

    constructor(private readonly usuariosService: UsuariosService){
        
          //this.producService = new ProductosService()
        }

   @Get('all')
      getProduct(): any {
       //return this.productosService.getProductos()[2][0];
         return this.usuariosService.getUsuarios();
     } 

  @Get(":id")
  getProductById(@Param('id') id: string){
    const idNum = parseInt(id, 10);
    if(idNum <= 0)
        throw new NotFoundException(`Usuario con ID ${idNum} no encontrado`);
    return idNum
  }

}

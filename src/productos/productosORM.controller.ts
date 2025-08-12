import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductoOrmService } from "./producto-orm/producto-orm.service";
import { CreateProductoDto } from "./dto/create-producto.dto";
import { UpdateProductoDto } from "./dto/update-productoORM.dto";

@Controller('productosORM')
export class ProductosORMController{
    constructor(private readonly service: ProductoOrmService) {}
    
    @Get() 
    findAll() { 
    return this.service.findAll(); 
    }
    
    @Get(':id') 
    findOne(@Param('id') id: string) { 
    return this.service.findOne(+id); 
    }

    @Post('') 
    create(@Body() dto: CreateProductoDto) { 
    return this.service.create(dto); 
    }
    
    @Put(':id') 
    update(@Param('id') id: string, @Body() dto: UpdateProductoDto) {
    return this.service.update(+id, dto);
    }
    
    @Delete(':id') 
    remove(@Param('id') id: string) { 
    return this.service.remove(+id); 
    }
}

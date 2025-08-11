import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Producto } from '../entities/producto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductoDto } from '../dto/create-producto.dto';
import { UpdateProductoDto } from '../dto/update-productoORM.dto';

@Injectable()
export class ProductoOrmService {

    constructor(@InjectRepository(Producto) private repo: Repository<Producto>) {}

    findAll() { 
        return this.repo.find(); 
    }

    findOne(id: number) { 
        return this.repo.findOneBy({ id }); 
    }

    create(dto: CreateProductoDto) { 
        return this.repo.save(dto); 
    }

    async update(id: number, dto: UpdateProductoDto) {

        const producto = await this.repo.findOneBy({ id });

        if (!producto) {
            throw new NotFoundException('Producto no encontrado');
        }

        // Aplica los cambios del DTO al producto existente
        Object.assign(producto, dto);

        // Guarda el producto actualizado
        return await this.repo.save(producto);
}

    async remove(id: number) { 
        const producto = await this.repo.findOneBy({ id });
        if (!producto) {
            throw new NotFoundException('🛑 Producto no encontrado');
        }

        await this.repo.remove(producto);
        return '✅ Producto eliminado exitosamente';
}

}

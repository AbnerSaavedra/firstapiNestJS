import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';

@Injectable()
export class ProductosService {

    private productos = [
    { id: 1, nombre: 'Teclado Mecánico', precio: 70 },
    { id: 2, nombre: 'Monitor LED', precio: 150 },
    { id: 3, nombre: 'Mouse Inalámbrico', precio: 40 },
    { id: 4, nombre: 'Mouse', precio: 40 },
  ];

 getProductos(){
        return this.productos
}

getProductoPorID(id: number){
        return this.productos.find(producto => producto.id === id);
    }

filtrar(nombre?: string, precioMin?: string) {
    let resultado = this.productos;

    if (nombre) {
      resultado = resultado.filter(p =>
        p.nombre.toLowerCase().includes(nombre.toLowerCase())
      );
    }

    if (precioMin) {
      const min = parseFloat(precioMin);
      resultado = resultado.filter(p => p.precio >= min);
    }

    return resultado;
  }

  crearProducto(data: { nombre: string; precio: number }) {
    const nuevoProducto = {
      id: this.productos.length + 1,
      ...data,
    };
    this.productos.push(nuevoProducto);
    return nuevoProducto;
  }

  crearProductoDTO(data: CreateProductoDto) {

    if (data.precio <= 0) {
      throw new BadRequestException('El precio debe ser mayor a cero');
    }

    const nuevoProducto = {
      id: this.productos.length + 1,
      ...data,
    };
    this.productos.push(nuevoProducto);
    return nuevoProducto;
  }
}

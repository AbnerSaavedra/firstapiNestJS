import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductosService {

    private productos = [
    { id: 1, nombre: 'Teclado Mecánico', precio: 70 },
    { id: 2, nombre: 'Monitor LED', precio: 150 },
    { id: 3, nombre: 'Mouse Inalámbrico', precio: 40 },
  ];

    getProductos(){
        return [
        { id: 1, nombre: 'Laptop', precio: 1200 },
        { id: 2, nombre: 'Teclado', precio: 75 }
        ];
}

getProductoPorID(id: number){
        return this.productos.find(producto => producto.id === id);
    }
}

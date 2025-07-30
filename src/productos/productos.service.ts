import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductosService {

    private productos = [
    { id: 1, nombre: 'Teclado Mecánico', precio: 70 },
    { id: 2, nombre: 'Monitor LED', precio: 150 },
    { id: 3, nombre: 'Mouse Inalámbrico', precio: 40 },
    { id: 4, nombre: 'Mouse', precio: 40 },
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
}

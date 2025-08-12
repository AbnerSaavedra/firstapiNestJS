import { Injectable } from '@nestjs/common';
import { LoggerService } from 'src/logger/logger.service';

@Injectable()
export class UsuariosService {

    constructor( private readonly logger: LoggerService){

    }

    crearUsuario(nombre: string ){
            this.logger.log(`Usuario creado: ${nombre}`);
            return { mensaje: 'Usuario registrado', nombre}
        }
}

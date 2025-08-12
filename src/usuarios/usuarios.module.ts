import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { LoggerModule } from 'src/logger/logger.module';

@Module({
  providers: [UsuariosService],
  imports: [LoggerModule]
})
export class UsuariosModule {}

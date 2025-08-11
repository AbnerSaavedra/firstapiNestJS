import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ProductosModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'inventario',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // solo en desarrollo
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

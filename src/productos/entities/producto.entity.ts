import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Producto{
    [x: string]: any;
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column('decimal', { precision: 10, scale: 2 })
    precio: number
    
    @Column({ default: true })
    disponible: boolean

    @CreateDateColumn()
    creadoEn: Date

    @UpdateDateColumn()
    actualizadoEn: Date
}

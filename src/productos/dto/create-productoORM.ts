import { IsBoolean, IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class CreateProductoDto{
    
    @IsNotEmpty()  
    @IsString()
    nombre: string;
    
    @IsNumber({ maxDecimalPlaces: 2 })
    @Min(0)  
    precio: number;
    
    @IsBoolean()
    disponible: boolean;
}

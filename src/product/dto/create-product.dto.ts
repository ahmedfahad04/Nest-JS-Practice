import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {

    @IsString()
    product: string;

    @IsNumber()
    quantity: number;
}
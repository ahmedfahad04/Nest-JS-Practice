import { IsEmail, IsString } from "class-validator";

export class ShowUserDto {

    @IsString()
    name: string;

    @IsString()
    @IsEmail()
    email: string;
}
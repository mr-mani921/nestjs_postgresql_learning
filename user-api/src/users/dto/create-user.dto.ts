import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDTO {
    @IsNotEmpty()
    name : string;
    @IsString() @IsNotEmpty()
    type: string;
}
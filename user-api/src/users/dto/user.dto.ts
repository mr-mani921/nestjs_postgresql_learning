import { IsNotEmpty, IsString } from "class-validator";

export class UserDTO {
    @IsNotEmpty()
    name : string;
    @IsString() @IsNotEmpty()
    email: string;
}
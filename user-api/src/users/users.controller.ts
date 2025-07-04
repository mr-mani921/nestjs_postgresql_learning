import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    
    constructor(private readonly userService: UsersService) {}

    @Get()
    getAllUsers() {
        return this.userService.getAllUsers();
    }
    @Post()
    registerNewUser(@Body() user: CreateUserDTO) {
        return this.userService.registerUser(user);
    }
}

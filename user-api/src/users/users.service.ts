import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class UsersService {
  getAllUsers() {
    const users = prisma.user.findMany();
    return users;
  }
  

  async registerUser(user: CreateUserDTO) {
    try {

      const newUser = await prisma.user.create({
        data: {
          name: user.name,
          email: user.email
        }
      })
      return newUser;
    } catch (error) {
      console.log("got an errro while trying to register user",error.message)
      throw error;
    }
  }
}

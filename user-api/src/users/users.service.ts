import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { User } from './entities/user.entity';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class UsersService {
  async getAllUsers() {
    const users = await prisma.user.findMany();
    return users;
  }

  async getUser(id: number) {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException('User Not Found');
    }
    console.log('the user of id ', id, 'is', user);
    return user;
  }

  async deleteUser(id: number) {
    try {
      return await prisma.user.delete({
        where: { id },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError)
        if (error.code === 'P2025') {
          throw new NotFoundException('User Not Found');
        }
      throw error;
    }
  }

  async registerUser(user: UserDTO) {
    try {
      const newUser = await prisma.user.create({
        data: {
          name: user.name,
          email: user.email,
        },
      });
      return newUser;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new BadRequestException('Email already exists');
        }
      }
      throw error;
    }
  }
}

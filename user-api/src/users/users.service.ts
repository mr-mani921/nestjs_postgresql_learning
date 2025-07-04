import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'mani', type: 'normal' },
    { id: 2, name: 'raza', type: 'normal' },
  ];

  getAllUsers() {
    return this.users;
  }

  registerUser(user: CreateUserDTO) {
    const id = Date.now();
    this.users.push({ id, ...user });
    return this.users;
  }
}

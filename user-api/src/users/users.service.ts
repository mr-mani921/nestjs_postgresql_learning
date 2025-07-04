import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'mani', type: 'normal' },
    { id: 2, name: 'raza', type: 'normal' },
  ];

  getAllUsers(): User[] {
    return this.users;
  }

  private generateId(): number {
    return this.users.length + 1;
  }
  

  registerUser(user: CreateUserDTO): User[] {
    const id = this.generateId();
    this.users.push({ id, ...user });
    return this.users;
  }
}

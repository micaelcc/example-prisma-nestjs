import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

import { User, Prisma } from '@prisma/client';

@Injectable()
class UserService {
  constructor(private prisma: PrismaService) {}

  async users(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User | undefined> {
    return this.prisma.user.create({
      data,
    });
  }
}

export { UserService };

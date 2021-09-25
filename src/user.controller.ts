import { Controller, Get, Post, Body, Put } from '@nestjs/common';

import { UserService } from './user.service';

import { User } from '@prisma/client';

@Controller()
class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Get('users')
    async get(): Promise<User[]> {
        return this.userService.users();
    }

    @Post('users')
    async create(
        @Body() data: { name: string, email?: string }
    ): Promise<User> {
        return this.userService.createUser(data);
    }
}

export { UserController }

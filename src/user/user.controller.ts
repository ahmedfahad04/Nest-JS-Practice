import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { AddUserDto } from './dto/add-user.dto';
import { ShowUserDto } from './dto/show-user.dto';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {

    constructor(private userService: UserService) { }

    @Get()
    getUsers() {
        return this.userService.findUsers();
    }

    @Get('/:userId')
    getSingleUser(@Param('userId', ParseUUIDPipe) userId: number) {
        return this.userService.findById(userId)
    }

    @Post()
    addUser(@Body() addUserDto: AddUserDto) {
        const savedUser = this.userService.createUser(addUserDto);
        return plainToClass(ShowUserDto, savedUser);
    }

    @Put('/:userId')
    updateUser(@Body() userDto: AddUserDto, @Param('userId', ParseUUIDPipe) userId: number) {
        return this.userService.updateUser(userDto, userId)
    }

    @Delete('/:userId')
    removeUser(@Param('userId', ParseUUIDPipe) userId: number) {
        return this.userService.deleteUser(userId)
    }

}

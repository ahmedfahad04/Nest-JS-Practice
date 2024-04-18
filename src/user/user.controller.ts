import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { plainToClass } from 'class-transformer';
import { AddUserDto } from './dto/add-user.dto';
import { ShowUserDto } from './dto/show-user.dto';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('/user')
export class UserController {

    constructor(private userService: UserService) { }

    @ApiOperation({ summary: 'Fetch All Users' })
    @Get()
    getUsers() {
        return this.userService.findUsers();
    }

    @ApiOperation({ summary: 'Fetch Single User' })
    @Get('/:userId')
    getSingleUser(@Param('userId', ParseUUIDPipe) userId: number) {
        return this.userService.findById(userId)
    }

    @ApiOperation({ summary: 'Create User' })
    @Post()
    addUser(@Body() addUserDto: AddUserDto) {
        const savedUser = this.userService.createUser(addUserDto);
        return plainToClass(ShowUserDto, savedUser);
    }

    @ApiOperation({ summary: 'Update User' })
    @Put('/:userId')
    updateUser(@Body() userDto: AddUserDto, @Param('userId', ParseUUIDPipe) userId: number) {
        return this.userService.updateUser(userDto, userId)
    }

    @ApiOperation({ summary: 'Delete User' })
    @Delete('/:userId')
    removeUser(@Param('userId', ParseUUIDPipe) userId: number) {
        return this.userService.deleteUser(userId)
    }

}

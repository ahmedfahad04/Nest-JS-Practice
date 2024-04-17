import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddUserDto } from './dto/add-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    createUser(userDto: AddUserDto) {
        return this.userRepository.save(userDto)
    }

    findUsers(): Promise<User[]> {
        return this.userRepository.find();
    }

    findById(userId: number) {
        return this.userRepository.findOne({ where: { id: userId }, select: ['id', 'name', 'email'] })
    }

    findByEmail(email: string) {
        return this.userRepository.findOne({ where: { email } })
    }

    updateUser(userDto: AddUserDto, userId: number) {
        return this.userRepository.update(userId, userDto);
    }

    deleteUser(userId: number) {
        return this.userRepository.delete(userId)
    }

}

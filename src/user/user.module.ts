import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],  //! need to add manually
  exports: [UserService],         // we export the service only
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { }

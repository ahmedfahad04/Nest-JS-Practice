import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';

@Module({
    imports: [UserModule],          // we link the user module with auth module
    controllers: [AuthController]
})
export class AuthModule { }

import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
    imports: [UserModule, PassportModule],          // we link the user module with auth module
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy]
})
export class AuthModule { }

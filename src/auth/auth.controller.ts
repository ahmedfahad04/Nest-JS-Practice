import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('/login')
    @UseGuards(AuthGuard('local'))
    async login(@Body() loginDto: any) {
        return this.authService.validateUser(loginDto.email, loginDto.password)
    }
}

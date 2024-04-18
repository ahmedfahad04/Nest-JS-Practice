import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('/auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('/login')
    @UseGuards(AuthGuard('local'))      //! what does Guards do??
    async login(@Request() req: any) {
        return this.authService.login(req.user);
    }
}

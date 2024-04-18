import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('profile')
@Controller('/profile')
export class ProfileController {

    @UseGuards(AuthGuard('jwt'))
    @Get()
    getProfile(@Request() req: any) {
        return { message: 'This is my profile (protected route)', user: req.user }
    }
}

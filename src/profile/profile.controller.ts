import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('profile')
@Controller('/profile')
export class ProfileController {

    @UseGuards(AuthGuard('jwt'))
    @Get()
    getProfile() {
        return { message: 'This is my profile (protected route)' }
    }
}

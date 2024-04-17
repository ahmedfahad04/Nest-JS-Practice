import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './../user/user.service';

@Controller('/auth')
export class AuthController {

    constructor(private userService: UserService) { }

    @Post('/login')
    async login(@Body() loginDto: any) {

        // find the user with userId
        const user = await this.userService.findByEmail(loginDto.email)

        // check if the credentials are correct
        if (user) {
            if (user.password === loginDto.password) {
                return user
            }
        }

        return 'Invalid Password'
    }
}

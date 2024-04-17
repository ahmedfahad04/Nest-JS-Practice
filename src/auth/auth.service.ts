import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

    constructor(private userService: UserService, private jwtService: JwtService) { }

    async validateUser(email: string, password: string) {

        // find the user with userId
        const user = await this.userService.findByEmail(email)

        // check if the credentials are correct
        if (user && user.password === password) {
            return user;
        }

        return null;
    }

    async login(user: any) {
        const payload = { sub: user.id, email: user.email }
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}

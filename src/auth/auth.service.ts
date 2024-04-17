import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

    constructor(private userService: UserService) { }

    async validateUser(email: string, password: string) {

        // find the user with userId
        const user = await this.userService.findByEmail(email)

        // check if the credentials are correct
        if (user && user.password === password) {
            return user;
        }

        return null;
    }
}

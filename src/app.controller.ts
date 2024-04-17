import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {

    @Get()
    greetings() {
        return 'Hello buddy'
    }
}
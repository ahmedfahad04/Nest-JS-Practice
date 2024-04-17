import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from "./app.controller";
import { Product } from "./product/entity/product.entity";
import { ProductModule } from "./product/product.module";
import { User } from "./user/entity/user.entity";
import { UserModule } from './user/user.module';


@Module({
    imports: [ProductModule, UserModule, TypeOrmModule.forRoot({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: '12345678',
        database: 'basic_nestjs',
        entities: [Product, User],  //! must add the new Entity 
        synchronize: true,          //! before production, it MUST be REMOVED
    })],
    controllers: [AppController]
})
export class AppModule { }
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { ProductController } from "./product/product.controller";
import { ProductModule } from "./product/product.module";

@Module({
    imports: [ProductModule],
    controllers: [AppController, ProductController]
})
export class AppModule { }
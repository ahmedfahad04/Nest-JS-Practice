import { Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { ProductService } from "./product.service";

@Controller('/product')
export class ProductController {

    constructor(private productService: ProductService) { }

    @Get()
    getProduct() {
        return this.productService.getProductDetails();
    }

    @Post()
    addProduct(@Req() req: Request) {
        return this.productService.createProduct(req);
    }

    @Get('/:productId')
    getSingleProduct(@Param() param: { productId: Number }) {
        return this.productService.findProduct(param);
    }

    @Delete('/:productId')
    removeProduct(@Param() param: { productId: Number }) {
        return this.productService.deleteProduct(param)
    }

    @Patch('/:productId')
    updateProduct(@Req() req: Request, @Param() param: { productId: number }) {
        return this.productService.updateProduct(req, param)
    }
}

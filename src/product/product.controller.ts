import { Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
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
        return req.body
    }

    @Get('/:productId')
    getSingleProduct(@Param() params: { productId: Number }) {
        return params
    }

    @Delete('/:productId')
    removeProduct(@Param() params: { productId: Number }) {
        return params
    }

    @Patch('/:productId')
    updateProduct(@Param() params: { productId: Number }) {
        return params
    }
}

import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { CreateProductDto } from "./dto/create-product.dto";
import { ProductService } from "./product.service";

@Controller('/product')
export class ProductController {

    constructor(private productService: ProductService) { }

    @Get()
    getProduct() {
        return this.productService.getProductDetails();
    }

    // we can use @Body to get ony the Body and in such case we need DTO
    // using DTO we can mention actually which 'fields' should I consider
    @Post()
    addProduct(@Body() createProductDTO: CreateProductDto) {
        return this.productService.createProduct(createProductDTO);
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

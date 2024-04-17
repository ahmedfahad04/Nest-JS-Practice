import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
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
    getSingleProduct(@Param('productId', ParseIntPipe) productId: number) {     //! this ParseIntPipe is also validating our data to be only Integer
        return this.productService.findProduct(productId);
    }

    @Delete('/:productId')
    removeProduct(@Param('productId', ParseIntPipe) productId: number) {
        return this.productService.deleteProduct(productId)
    }

    @Patch('/:productId')
    updateProduct(@Body() productDTO: CreateProductDto, @Param('productId', ParseIntPipe) productId: number) {
        return this.productService.updateProduct(productDTO, productId)
    }
}

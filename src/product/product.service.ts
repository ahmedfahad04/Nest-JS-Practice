import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
    getProductDetails() {
        return { name: "Bottle", amount: '10 pcs' }
    }

    findProduct(productId: number) {
        return { productId }
    }

    createProduct(createProductDTO: CreateProductDto) {
        return createProductDTO
    }

    updateProduct(req: Request, productId: number) {
        console.log("REQ: ", req.body, productId)
        return { body: req.body, productId }
    }

    deleteProduct(productId: number) {
        return productId
    }
}

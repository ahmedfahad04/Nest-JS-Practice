import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { CreateProductDto } from './dto/product-create.dto';

@Injectable()
export class ProductService {
    getProductDetails() {
        return { name: "Bottle", amount: '10 pcs' }
    }

    findProduct(param: { productId: Number }) {
        return param
    }

    createProduct(createProductDTO: CreateProductDto) {
        return createProductDTO
    }

    updateProduct(req: Request, param: { productId: number }) {
        console.log("REQ: ", req.body, param)
        return { body: req.body, param }
    }

    deleteProduct(param: { productId: Number }) {
        return param
    }
}

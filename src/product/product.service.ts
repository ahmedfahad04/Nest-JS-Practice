import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class ProductService {
    getProductDetails() {
        return { name: "Bottle", amount: '10 pcs' }
    }

    findProduct(param: { productId: Number }) {
        return param
    }

    createProduct(req: Request) {
        return req.body
    }

    updateProduct(req: Request, param: { productId: number }) {
        console.log("REQ: ", req.body, param)
        return { body: req.body, param }
    }

    deleteProduct(param: { productId: Number }) {
        return param
    }
}

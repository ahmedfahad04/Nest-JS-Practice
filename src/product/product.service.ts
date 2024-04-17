import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    getProductDetails() {
        return { name: "Bottle", amount: '10 pcs' }
    }
}

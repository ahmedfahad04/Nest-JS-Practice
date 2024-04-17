import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entity/product.entity';

@Injectable()
export class ProductService {

    //! this is how we connect db with service (it's like the repository we used in express)
    constructor(@InjectRepository(Product) private productRepository: Repository<Product>) { }


    getProductDetails(): Promise<Product[]> {
        return this.productRepository.find();
    }

    findProduct(productId: number) {
        return this.productRepository.findOne({
            where: { id: productId }
        })
    }

    createProduct(createProductDTO: CreateProductDto) {
        return this.productRepository.save(createProductDTO)
    }

    updateProduct(productDTO: CreateProductDto, productId: number) {
        return this.productRepository.update(productId, productDTO)
    }

    deleteProduct(productId: number) {
        return this.productRepository.delete(productId)
    }
}

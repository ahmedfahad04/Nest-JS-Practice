import { Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";

@Controller('/product')
export class AppController {

    @Get()
    getProduct() {
        return { name: "Bottle", amount: '10 pcs' }
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
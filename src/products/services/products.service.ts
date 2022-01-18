import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product } from './../entities/product.entity';
import {
  CreateProductDto,
  UpdateProductDto,
  FilterProductsDto,
} from './../dtos/products.dtos';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async findAll(params?: FilterProductsDto) {
    const count = await this.productModel.countDocuments().exec();

    if (params) {
      const { limit, offset } = params;
      const results = await this.productModel
        .find()
        .populate('brand')
        .limit(limit)
        .skip(offset)
        .exec();

      return { results, count };
    }

    const results = this.productModel.find().populate('brand').exec();

    return { results, count };
  }

  async findOne(id: string) {
    const product = await this.productModel
      .findById(id)
      .populate('brand')
      .exec();

    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(data: CreateProductDto) {
    const newProduct = new this.productModel(data);

    return newProduct.save();
  }

  update(id: string, changes: UpdateProductDto) {
    const product = this.productModel
      .findByIdAndUpdate(
        id,
        {
          $set: changes,
        },
        // This return the updated product
        { new: true },
      )
      .exec();

    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }

    return product;
  }

  remove(id: string) {
    return this.productModel.findByIdAndDelete(id);
  }
}

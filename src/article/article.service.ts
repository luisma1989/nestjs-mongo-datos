import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ArticleDto } from './article.dto';
import { Article } from './article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<Article>,
  ) {}

  async findAll() {
    const count = await this.articleModel.countDocuments().exec();
    const results = await this.articleModel.find().exec();

    return { results, count };
  }

  async findOne(id: string) {
    const article = await this.articleModel.findById(id).exec();

    if (!article) {
      throw new NotFoundException(`Article #${id} not found`);
    }
    return article;
  }

  create(data: ArticleDto) {
    const newArticle = new this.articleModel(data);

    return newArticle.save();
  }

  update(id: string, changes: ArticleDto) {
    const article = this.articleModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();

    if (!article) {
      throw new NotFoundException(`Article #${id} not found`);
    }

    return article;
  }

  remove(id: string) {
    return this.articleModel.findByIdAndRemove(id).exec();
  }
}

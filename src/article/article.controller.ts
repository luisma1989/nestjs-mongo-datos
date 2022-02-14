import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ArticleDto } from './article.dto';
import { ArticleService } from './article.service';

@ApiTags('articles')
@Controller('articles')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get()
  getArticles() {
    return this.articleService.findAll();
  }

  @Get('/:id')
  getArticle(@Param('id') id: string) {
    return this.articleService.findOne(id);
  }

  @Post()
  createArticle(@Body() article: ArticleDto) {
    return this.articleService.create(article);
  }

  @Put('/:id')
  updateArticle(@Param('id') id: string, @Body() article: ArticleDto) {
    return this.articleService.update(id, article);
  }

  @Delete('/:id')
  deleteArticle(@Param('id') id: string) {
    return this.articleService.remove(id);
  }
}

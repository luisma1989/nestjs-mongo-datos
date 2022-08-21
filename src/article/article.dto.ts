import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

// A DTO is an object that defines how the data will be sent over the network.
// We could determine the DTO schema by using TypeScript interfaces, or by
// simple classes. Interestingly, we recommend using classes here.

export class ArticleDto {
  @IsString()
  @IsNotEmpty()
  type_of: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The title of the article.',
    required: true,
  })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The description of the article.',
    required: true,
  })
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The summary of the article.',
    required: true,
  })
  summary: string;

  @IsNumber()
  @IsOptional()
  commentCount: number;

  @IsNumber()
  @IsOptional()
  viewsCount: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Author of the article.',
    required: true,
  })
  author: string;

  @IsString()
  @IsNotEmpty()
  coverImage: string;

  @IsString()
  @IsOptional()
  socialImage: string;

  @IsOptional()
  readable_publish_date: string;

  tags: string[];

  tag_list: string;

  @IsString()
  @IsOptional()
  url: string;

  @IsNumber()
  @IsOptional()
  positiveReactionsCount: number;

  @IsNumber()
  @IsOptional()
  publicReactionsCount: number;

  createdAt: string;

  editedAt: string;

  publishedAt: string;

  @IsNumber()
  @IsNotEmpty()
  readingTimeMinutes: number;

  body_html: string;

  @IsString()
  body_markdown: string;
}

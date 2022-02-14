import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
// A DTO is an object that defines how the data will be sent over the network.
// We could determine the DTO schema by using TypeScript interfaces, or by
// simple classes. Interestingly, we recommend using classes here.
export class ArticleDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `product's name` })
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
    description: 'The author of the article.',
    required: true,
  })
  summary: string;

  @IsNumber()
  @ApiProperty()
  commentCount: number;

  @IsNumber()
  @ApiProperty()
  viewsCount: number;

  // tags: string[];
}

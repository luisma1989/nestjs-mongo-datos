import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Date } from 'mongoose';

@Schema()
export class Article {
  @Prop({
    required: true,
    unique: true,
    index: true,
    maxlength: 100,
    minlength: 1,
    trim: true,
  })
  title: string;

  @Prop({
    required: true,
    maxlength: 15000,
    minlength: 1,
    trim: true,
  })
  description: string;

  @Prop({
    required: true,
    maxlength: 15000,
    minlength: 1,
    trim: true,
  })
  summary: string;

  @Prop({
    type: Number,
    default: 0,
  })
  commentCount: number;

  @Prop({
    type: Number,
    default: 0,
  })
  viewsCount: number;

  @Prop({
    type: Date,
    default: Date.now,
  })
  createdAt: Date;

  // @Prop({
  //   type: [
  //     {
  //       type: String,
  //       maxlength: 20,
  //       minlength: 1,
  //       lowercase: true,
  //       trim: true,
  //     },
  //   ],
  // })
  // tags: [string];
}

export const ArticleSchema = SchemaFactory.createForClass(Article);

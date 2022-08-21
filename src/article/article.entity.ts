import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Date } from 'mongoose';

@Schema()
export class Article {
  @Prop({
    required: true,
    unique: true,
    index: true,
    maxlength: 20,
    minlength: 1,
    trim: true,
  })
  type_of: string;

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
    required: false,
    default: 0,
  })
  commentsCount: number;

  @Prop({
    type: Number,
    required: false,
    default: 0,
  })
  viewsCount: number;

  @Prop({
    required: false,
    type: Date,
    default: Date.now,
  })
  createdAt: Date;

  @Prop({
    required: false,
    type: Date,
    default: Date.now,
  })
  editedAt: string;

  @Prop({
    required: false,
    type: Date,
    default: Date.now,
  })
  publishedAt: string;

  @Prop({
    required: true,
    type: [
      {
        type: String,
        maxlength: 20,
        minlength: 1,
        lowercase: true,
        trim: true,
      },
    ],
  })
  tags: [string];

  @Prop({
    maxlength: 150,
    minlength: 1,
    trim: true,
  })
  tag_list: string;

  @Prop({
    unique: true,
    index: true,
    required: false,
    minlength: 1,
    trim: true,
  })
  url: string;

  @Prop({
    type: Number,
    default: 0,
  })
  positiveReactionsCount: number;

  @Prop({
    type: Number,
    default: 0,
  })
  publicReactionsCount: number;

  @Prop({
    type: Number,
    default: 1,
  })
  readingTimeMinutes: number;

  @Prop({
    minlength: 1,
    trim: true,
  })
  socialImage: string;

  @Prop({
    minlength: 1,
    trim: true,
  })
  coverImage: string;

  body_html: string;

  @Prop({
    minlength: 1,
    trim: true,
  })
  body_markdown: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);

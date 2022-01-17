import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ type: Number, default: 0 })
  price: number;

  @Prop({ type: Number, default: 0 })
  stock: number;

  @Prop()
  image: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

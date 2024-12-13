
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UUID } from 'crypto';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type postDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }] })
  user_id: string;
  @Prop({required:true})
  title: string;
  @Prop({required:true})
  content: string;
  @Prop({required:true})
  slug:string
}

export const Postschema = SchemaFactory.createForClass(Post);


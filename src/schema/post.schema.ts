
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UUID } from 'crypto';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type postDoecument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }] })
  user_id: UUID;
  @Prop({required:true})
  title: string;
  @Prop({required:true})
  content: string;
  @Prop({required:true})
  slug:string
}

export const Postschema = SchemaFactory.createForClass(Post);


import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UUID } from 'crypto';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type postDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }] })
  user_id: UUID;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'post' }] })
  post_id: UUID;
  @Prop({required:true})
  content: string;
  
}

export const Commentschema = SchemaFactory.createForClass(Comment);
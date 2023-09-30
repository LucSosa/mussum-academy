import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateContentInput {
  @Field()
  description: string;

  @Field()
  linkContent?: string;

  @Field()
  lessonId?: string;
}

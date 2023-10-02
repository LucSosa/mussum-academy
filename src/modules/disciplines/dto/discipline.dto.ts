import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';

@ObjectType('Discipline')
@FilterableOffsetConnection('students', () => DisciplineDTO, { nullable: true })
export class DisciplineDTO extends BaseDTO {
  @FilterableField()
  name: string;
}

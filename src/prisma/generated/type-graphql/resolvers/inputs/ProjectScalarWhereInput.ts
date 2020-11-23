import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProjectScalarWhereInput {
  @TypeGraphQL.Field(_type => [ProjectScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: ProjectScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: ProjectScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: ProjectScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true,
    description: undefined
  })
  updatedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true,
    description: undefined
  })
  deletedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  userId?: StringFilter | undefined;
}

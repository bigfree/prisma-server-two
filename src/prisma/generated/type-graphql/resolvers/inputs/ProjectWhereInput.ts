import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProjectWhereInput {
  @TypeGraphQL.Field(_type => [ProjectWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: ProjectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: ProjectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: ProjectWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true,
    description: undefined
  })
  projectOwner?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true,
    description: undefined
  })
  users?: UserListRelationFilter | undefined;
}

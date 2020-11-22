import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { DateTimeFilter } from "./DateTimeFilter";
import { DateTimeNullableFilter } from "./DateTimeNullableFilter";
import { StringFilter } from "./StringFilter";
import { StringNullableFilter } from "./StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WorkspaceWhereInput {
  @TypeGraphQL.Field(_type => [WorkspaceWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: WorkspaceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspaceWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: WorkspaceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspaceWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: WorkspaceWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  slug?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true,
    description: undefined
  })
  description?: StringNullableFilter | undefined;

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
}

import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumRoleFilter } from "../inputs/EnumRoleFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserScalarWhereInput {
  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: UserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: UserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: UserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true,
    description: undefined
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  password?: StringFilter | undefined;

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

  @TypeGraphQL.Field(_type => EnumRoleFilter, {
    nullable: true,
    description: undefined
  })
  role?: EnumRoleFilter | undefined;
}

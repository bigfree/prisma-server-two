import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserCreateWithoutProjectInput } from "../inputs/UserCreateWithoutProjectInput";
import { UserUpdateWithoutProjectInput } from "../inputs/UserUpdateWithoutProjectInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpsertWithoutProjectInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutProjectInput, {
    nullable: false,
    description: undefined
  })
  update!: UserUpdateWithoutProjectInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutProjectInput, {
    nullable: false,
    description: undefined
  })
  create!: UserCreateWithoutProjectInput;
}

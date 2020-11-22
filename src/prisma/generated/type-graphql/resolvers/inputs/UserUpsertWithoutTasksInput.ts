import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserCreateWithoutTasksInput } from "./UserCreateWithoutTasksInput";
import { UserUpdateWithoutTasksInput } from "./UserUpdateWithoutTasksInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpsertWithoutTasksInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutTasksInput, {
    nullable: false,
    description: undefined
  })
  update!: UserUpdateWithoutTasksInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTasksInput, {
    nullable: false,
    description: undefined
  })
  create!: UserCreateWithoutTasksInput;
}

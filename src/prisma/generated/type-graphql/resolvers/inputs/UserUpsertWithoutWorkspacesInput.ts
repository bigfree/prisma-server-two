import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserCreateWithoutWorkspacesInput } from "../inputs/UserCreateWithoutWorkspacesInput";
import { UserUpdateWithoutWorkspacesInput } from "../inputs/UserUpdateWithoutWorkspacesInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpsertWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutWorkspacesInput, {
    nullable: false,
    description: undefined
  })
  update!: UserUpdateWithoutWorkspacesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutWorkspacesInput, {
    nullable: false,
    description: undefined
  })
  create!: UserCreateWithoutWorkspacesInput;
}

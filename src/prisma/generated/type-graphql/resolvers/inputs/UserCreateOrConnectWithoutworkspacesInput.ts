import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserCreateWithoutWorkspacesInput } from "../inputs/UserCreateWithoutWorkspacesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserCreateOrConnectWithoutworkspacesInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutWorkspacesInput, {
    nullable: false,
    description: undefined
  })
  create!: UserCreateWithoutWorkspacesInput;
}

import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserCreateOrConnectWithoutworkspacesInput } from "../inputs/UserCreateOrConnectWithoutworkspacesInput";
import { UserCreateWithoutWorkspacesInput } from "../inputs/UserCreateWithoutWorkspacesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserCreateOneWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutWorkspacesInput, {
    nullable: true,
    description: undefined
  })
  create?: UserCreateWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutworkspacesInput, {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: UserCreateOrConnectWithoutworkspacesInput | undefined;
}

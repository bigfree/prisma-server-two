import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserCreateOrConnectWithoutprojectInput } from "../inputs/UserCreateOrConnectWithoutprojectInput";
import { UserCreateWithoutProjectInput } from "../inputs/UserCreateWithoutProjectInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserCreateOneWithoutProjectInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutProjectInput, {
    nullable: true,
    description: undefined
  })
  create?: UserCreateWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutprojectInput, {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: UserCreateOrConnectWithoutprojectInput | undefined;
}

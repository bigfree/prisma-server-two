import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserCreateOrConnectWithoutprojectOwnsInput } from "../inputs/UserCreateOrConnectWithoutprojectOwnsInput";
import { UserCreateWithoutProjectOwnsInput } from "../inputs/UserCreateWithoutProjectOwnsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserCreateOneWithoutProjectOwnsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutProjectOwnsInput, {
    nullable: true,
    description: undefined
  })
  create?: UserCreateWithoutProjectOwnsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutprojectOwnsInput, {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: UserCreateOrConnectWithoutprojectOwnsInput | undefined;
}

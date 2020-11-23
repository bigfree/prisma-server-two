import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserCreateOrConnectWithoutprojectInput } from "../inputs/UserCreateOrConnectWithoutprojectInput";
import { UserCreateWithoutProjectInput } from "../inputs/UserCreateWithoutProjectInput";
import { UserUpdateWithoutProjectInput } from "../inputs/UserUpdateWithoutProjectInput";
import { UserUpsertWithoutProjectInput } from "../inputs/UserUpsertWithoutProjectInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateOneRequiredWithoutProjectInput {
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

  @TypeGraphQL.Field(_type => UserUpdateWithoutProjectInput, {
    nullable: true,
    description: undefined
  })
  update?: UserUpdateWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutProjectInput, {
    nullable: true,
    description: undefined
  })
  upsert?: UserUpsertWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutprojectInput, {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: UserCreateOrConnectWithoutprojectInput | undefined;
}

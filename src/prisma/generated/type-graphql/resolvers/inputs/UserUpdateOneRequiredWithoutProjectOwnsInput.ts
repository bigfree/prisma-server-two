import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserCreateOrConnectWithoutprojectOwnsInput } from "../inputs/UserCreateOrConnectWithoutprojectOwnsInput";
import { UserCreateWithoutProjectOwnsInput } from "../inputs/UserCreateWithoutProjectOwnsInput";
import { UserUpdateWithoutProjectOwnsInput } from "../inputs/UserUpdateWithoutProjectOwnsInput";
import { UserUpsertWithoutProjectOwnsInput } from "../inputs/UserUpsertWithoutProjectOwnsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateOneRequiredWithoutProjectOwnsInput {
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

  @TypeGraphQL.Field(_type => UserUpdateWithoutProjectOwnsInput, {
    nullable: true,
    description: undefined
  })
  update?: UserUpdateWithoutProjectOwnsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutProjectOwnsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: UserUpsertWithoutProjectOwnsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutprojectOwnsInput, {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: UserCreateOrConnectWithoutprojectOwnsInput | undefined;
}

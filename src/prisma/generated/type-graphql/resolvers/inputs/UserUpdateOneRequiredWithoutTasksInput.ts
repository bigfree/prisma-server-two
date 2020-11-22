import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserCreateOrConnectWithouttasksInput } from "./UserCreateOrConnectWithouttasksInput";
import { UserCreateWithoutTasksInput } from "./UserCreateWithoutTasksInput";
import { UserUpdateWithoutTasksInput } from "./UserUpdateWithoutTasksInput";
import { UserUpsertWithoutTasksInput } from "./UserUpsertWithoutTasksInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateOneRequiredWithoutTasksInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTasksInput, {
    nullable: true,
    description: undefined
  })
  create?: UserCreateWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutTasksInput, {
    nullable: true,
    description: undefined
  })
  update?: UserUpdateWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutTasksInput, {
    nullable: true,
    description: undefined
  })
  upsert?: UserUpsertWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithouttasksInput, {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: UserCreateOrConnectWithouttasksInput | undefined;
}

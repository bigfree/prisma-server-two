import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserCreateOrConnectWithoutprojectsInput } from "../inputs/UserCreateOrConnectWithoutprojectsInput";
import { UserCreateWithoutProjectsInput } from "../inputs/UserCreateWithoutProjectsInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutProjectsInput } from "../inputs/UserUpdateManyWithWhereWithoutProjectsInput";
import { UserUpdateWithWhereUniqueWithoutProjectsInput } from "../inputs/UserUpdateWithWhereUniqueWithoutProjectsInput";
import { UserUpsertWithWhereUniqueWithoutProjectsInput } from "../inputs/UserUpsertWithWhereUniqueWithoutProjectsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateManyWithoutProjectsInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutProjectsInput], {
    nullable: true,
    description: undefined
  })
  create?: UserCreateWithoutProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutProjectsInput], {
    nullable: true,
    description: undefined
  })
  update?: UserUpdateWithWhereUniqueWithoutProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutProjectsInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: UserUpdateManyWithWhereWithoutProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: UserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutProjectsInput], {
    nullable: true,
    description: undefined
  })
  upsert?: UserUpsertWithWhereUniqueWithoutProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutprojectsInput], {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: UserCreateOrConnectWithoutprojectsInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserCreateOrConnectWithoutprojectsInput } from "../inputs/UserCreateOrConnectWithoutprojectsInput";
import { UserCreateWithoutProjectsInput } from "../inputs/UserCreateWithoutProjectsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserCreateManyWithoutProjectsInput {
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

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutprojectsInput], {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: UserCreateOrConnectWithoutprojectsInput[] | undefined;
}

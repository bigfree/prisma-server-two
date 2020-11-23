import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserUpdateWithoutProjectsInput } from "../inputs/UserUpdateWithoutProjectsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateWithWhereUniqueWithoutProjectsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutProjectsInput, {
    nullable: false,
    description: undefined
  })
  data!: UserUpdateWithoutProjectsInput;
}

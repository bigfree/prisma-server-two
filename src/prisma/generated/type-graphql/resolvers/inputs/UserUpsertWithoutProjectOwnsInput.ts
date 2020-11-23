import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserCreateWithoutProjectOwnsInput } from "../inputs/UserCreateWithoutProjectOwnsInput";
import { UserUpdateWithoutProjectOwnsInput } from "../inputs/UserUpdateWithoutProjectOwnsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpsertWithoutProjectOwnsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutProjectOwnsInput, {
    nullable: false,
    description: undefined
  })
  update!: UserUpdateWithoutProjectOwnsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutProjectOwnsInput, {
    nullable: false,
    description: undefined
  })
  create!: UserCreateWithoutProjectOwnsInput;
}

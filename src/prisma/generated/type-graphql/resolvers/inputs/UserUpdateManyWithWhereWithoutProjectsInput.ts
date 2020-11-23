import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyMutationInput } from "../inputs/UserUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateManyWithWhereWithoutProjectsInput {
  @TypeGraphQL.Field(_type => UserScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: UserScalarWhereInput;

  @TypeGraphQL.Field(_type => UserUpdateManyMutationInput, {
    nullable: false,
    description: undefined
  })
  data!: UserUpdateManyMutationInput;
}

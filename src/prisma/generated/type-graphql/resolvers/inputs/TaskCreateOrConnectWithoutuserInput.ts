import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { TaskCreateWithoutUserInput } from "./TaskCreateWithoutUserInput";
import { TaskWhereUniqueInput } from "./TaskWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TaskCreateOrConnectWithoutuserInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutUserInput, {
    nullable: false,
    description: undefined
  })
  create!: TaskCreateWithoutUserInput;
}

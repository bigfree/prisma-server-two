import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { TaskCreateWithoutUserInput } from "./TaskCreateWithoutUserInput";
import { TaskUpdateWithoutUserInput } from "./TaskUpdateWithoutUserInput";
import { TaskWhereUniqueInput } from "./TaskWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TaskUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutUserInput, {
    nullable: false,
    description: undefined
  })
  update!: TaskUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutUserInput, {
    nullable: false,
    description: undefined
  })
  create!: TaskCreateWithoutUserInput;
}

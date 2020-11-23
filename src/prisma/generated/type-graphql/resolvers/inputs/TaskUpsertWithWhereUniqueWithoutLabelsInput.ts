import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { TaskCreateWithoutLabelsInput } from "../inputs/TaskCreateWithoutLabelsInput";
import { TaskUpdateWithoutLabelsInput } from "../inputs/TaskUpdateWithoutLabelsInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TaskUpsertWithWhereUniqueWithoutLabelsInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutLabelsInput, {
    nullable: false,
    description: undefined
  })
  update!: TaskUpdateWithoutLabelsInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutLabelsInput, {
    nullable: false,
    description: undefined
  })
  create!: TaskCreateWithoutLabelsInput;
}

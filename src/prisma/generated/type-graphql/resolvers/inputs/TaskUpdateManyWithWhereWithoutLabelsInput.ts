import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { TaskScalarWhereInput } from "./TaskScalarWhereInput";
import { TaskUpdateManyMutationInput } from "./TaskUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TaskUpdateManyWithWhereWithoutLabelsInput {
  @TypeGraphQL.Field(_type => TaskScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: TaskScalarWhereInput;

  @TypeGraphQL.Field(_type => TaskUpdateManyMutationInput, {
    nullable: false,
    description: undefined
  })
  data!: TaskUpdateManyMutationInput;
}

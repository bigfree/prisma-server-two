import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { LabelScalarWhereInput } from "./LabelScalarWhereInput";
import { LabelUpdateManyMutationInput } from "./LabelUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class LabelUpdateManyWithWhereWithoutTasksInput {
  @TypeGraphQL.Field(_type => LabelScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: LabelScalarWhereInput;

  @TypeGraphQL.Field(_type => LabelUpdateManyMutationInput, {
    nullable: false,
    description: undefined
  })
  data!: LabelUpdateManyMutationInput;
}

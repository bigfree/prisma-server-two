import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { LabelUpdateWithoutTasksInput } from "../inputs/LabelUpdateWithoutTasksInput";
import { LabelWhereUniqueInput } from "../inputs/LabelWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class LabelUpdateWithWhereUniqueWithoutTasksInput {
  @TypeGraphQL.Field(_type => LabelWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: LabelWhereUniqueInput;

  @TypeGraphQL.Field(_type => LabelUpdateWithoutTasksInput, {
    nullable: false,
    description: undefined
  })
  data!: LabelUpdateWithoutTasksInput;
}

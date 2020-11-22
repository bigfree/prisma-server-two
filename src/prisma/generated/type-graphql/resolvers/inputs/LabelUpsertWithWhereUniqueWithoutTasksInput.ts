import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { LabelCreateWithoutTasksInput } from "./LabelCreateWithoutTasksInput";
import { LabelUpdateWithoutTasksInput } from "./LabelUpdateWithoutTasksInput";
import { LabelWhereUniqueInput } from "./LabelWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class LabelUpsertWithWhereUniqueWithoutTasksInput {
  @TypeGraphQL.Field(_type => LabelWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: LabelWhereUniqueInput;

  @TypeGraphQL.Field(_type => LabelUpdateWithoutTasksInput, {
    nullable: false,
    description: undefined
  })
  update!: LabelUpdateWithoutTasksInput;

  @TypeGraphQL.Field(_type => LabelCreateWithoutTasksInput, {
    nullable: false,
    description: undefined
  })
  create!: LabelCreateWithoutTasksInput;
}

import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { LabelCreateWithoutTasksInput } from "../inputs/LabelCreateWithoutTasksInput";
import { LabelWhereUniqueInput } from "../inputs/LabelWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class LabelCreateOrConnectWithouttasksInput {
  @TypeGraphQL.Field(_type => LabelWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: LabelWhereUniqueInput;

  @TypeGraphQL.Field(_type => LabelCreateWithoutTasksInput, {
    nullable: false,
    description: undefined
  })
  create!: LabelCreateWithoutTasksInput;
}

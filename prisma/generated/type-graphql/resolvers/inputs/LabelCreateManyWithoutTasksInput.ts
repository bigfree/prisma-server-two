import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { LabelCreateOrConnectWithouttasksInput } from "../inputs/LabelCreateOrConnectWithouttasksInput";
import { LabelCreateWithoutTasksInput } from "../inputs/LabelCreateWithoutTasksInput";
import { LabelWhereUniqueInput } from "../inputs/LabelWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class LabelCreateManyWithoutTasksInput {
  @TypeGraphQL.Field(_type => [LabelCreateWithoutTasksInput], {
    nullable: true,
    description: undefined
  })
  create?: LabelCreateWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: LabelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelCreateOrConnectWithouttasksInput], {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: LabelCreateOrConnectWithouttasksInput[] | undefined;
}

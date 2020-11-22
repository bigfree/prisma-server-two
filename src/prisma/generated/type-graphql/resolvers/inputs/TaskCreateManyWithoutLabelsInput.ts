import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { TaskCreateOrConnectWithoutlabelsInput } from "./TaskCreateOrConnectWithoutlabelsInput";
import { TaskCreateWithoutLabelsInput } from "./TaskCreateWithoutLabelsInput";
import { TaskWhereUniqueInput } from "./TaskWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TaskCreateManyWithoutLabelsInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutLabelsInput], {
    nullable: true,
    description: undefined
  })
  create?: TaskCreateWithoutLabelsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutlabelsInput], {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: TaskCreateOrConnectWithoutlabelsInput[] | undefined;
}

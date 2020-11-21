import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { TaskCreateOrConnectWithoutlabelsInput } from "../inputs/TaskCreateOrConnectWithoutlabelsInput";
import { TaskCreateWithoutLabelsInput } from "../inputs/TaskCreateWithoutLabelsInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

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

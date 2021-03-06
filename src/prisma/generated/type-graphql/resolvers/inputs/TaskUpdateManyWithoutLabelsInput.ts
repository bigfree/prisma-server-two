import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { TaskCreateOrConnectWithoutlabelsInput } from "../inputs/TaskCreateOrConnectWithoutlabelsInput";
import { TaskCreateWithoutLabelsInput } from "../inputs/TaskCreateWithoutLabelsInput";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyWithWhereWithoutLabelsInput } from "../inputs/TaskUpdateManyWithWhereWithoutLabelsInput";
import { TaskUpdateWithWhereUniqueWithoutLabelsInput } from "../inputs/TaskUpdateWithWhereUniqueWithoutLabelsInput";
import { TaskUpsertWithWhereUniqueWithoutLabelsInput } from "../inputs/TaskUpsertWithWhereUniqueWithoutLabelsInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TaskUpdateManyWithoutLabelsInput {
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

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpdateWithWhereUniqueWithoutLabelsInput], {
    nullable: true,
    description: undefined
  })
  update?: TaskUpdateWithWhereUniqueWithoutLabelsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpdateManyWithWhereWithoutLabelsInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: TaskUpdateManyWithWhereWithoutLabelsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: TaskScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpsertWithWhereUniqueWithoutLabelsInput], {
    nullable: true,
    description: undefined
  })
  upsert?: TaskUpsertWithWhereUniqueWithoutLabelsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutlabelsInput], {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: TaskCreateOrConnectWithoutlabelsInput[] | undefined;
}

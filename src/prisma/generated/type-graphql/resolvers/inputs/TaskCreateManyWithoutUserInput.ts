import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { TaskCreateOrConnectWithoutuserInput } from "../inputs/TaskCreateOrConnectWithoutuserInput";
import { TaskCreateWithoutUserInput } from "../inputs/TaskCreateWithoutUserInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TaskCreateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  create?: TaskCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutuserInput], {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: TaskCreateOrConnectWithoutuserInput[] | undefined;
}

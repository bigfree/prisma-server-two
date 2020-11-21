import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { TaskWhereInput } from "../inputs/TaskWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TaskListRelationFilter {
  @TypeGraphQL.Field(_type => TaskWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: TaskWhereInput | undefined;

  @TypeGraphQL.Field(_type => TaskWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: TaskWhereInput | undefined;

  @TypeGraphQL.Field(_type => TaskWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: TaskWhereInput | undefined;
}

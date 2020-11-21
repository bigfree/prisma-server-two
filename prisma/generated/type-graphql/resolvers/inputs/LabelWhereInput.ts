import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TaskListRelationFilter } from "../inputs/TaskListRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class LabelWhereInput {
  @TypeGraphQL.Field(_type => [LabelWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: LabelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: LabelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: LabelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => TaskListRelationFilter, {
    nullable: true,
    description: undefined
  })
  tasks?: TaskListRelationFilter | undefined;
}

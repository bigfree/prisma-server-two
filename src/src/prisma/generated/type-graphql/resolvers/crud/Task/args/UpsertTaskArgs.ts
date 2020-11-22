import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TaskCreateInput } from "../../../inputs/TaskCreateInput";
import { TaskUpdateInput } from "../../../inputs/TaskUpdateInput";
import { TaskWhereUniqueInput } from "../../../inputs/TaskWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTaskArgs {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, { nullable: false })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskCreateInput, { nullable: false })
  create!: TaskCreateInput;

  @TypeGraphQL.Field(_type => TaskUpdateInput, { nullable: false })
  update!: TaskUpdateInput;
}

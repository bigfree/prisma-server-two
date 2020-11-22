import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TaskWhereUniqueInput } from "../../../inputs/TaskWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteTaskArgs {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, { nullable: false })
  where!: TaskWhereUniqueInput;
}

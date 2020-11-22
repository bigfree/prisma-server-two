import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TaskWhereInput } from "../../../inputs/TaskWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTaskArgs {
  @TypeGraphQL.Field(_type => TaskWhereInput, { nullable: true })
  where?: TaskWhereInput | undefined;
}

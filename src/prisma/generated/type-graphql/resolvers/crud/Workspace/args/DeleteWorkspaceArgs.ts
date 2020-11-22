import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WorkspaceWhereUniqueInput } from "../../../inputs/WorkspaceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteWorkspaceArgs {
  @TypeGraphQL.Field(_type => WorkspaceWhereUniqueInput, { nullable: false })
  where!: WorkspaceWhereUniqueInput;
}

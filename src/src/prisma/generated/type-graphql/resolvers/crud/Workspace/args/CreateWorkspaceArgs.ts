import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WorkspaceCreateInput } from "../../../inputs/WorkspaceCreateInput";

@TypeGraphQL.ArgsType()
export class CreateWorkspaceArgs {
  @TypeGraphQL.Field(_type => WorkspaceCreateInput, { nullable: false })
  data!: WorkspaceCreateInput;
}

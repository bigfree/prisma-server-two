import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WorkspaceUpdateInput } from "../../../inputs/WorkspaceUpdateInput";
import { WorkspaceWhereUniqueInput } from "../../../inputs/WorkspaceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateWorkspaceArgs {
  @TypeGraphQL.Field(_type => WorkspaceUpdateInput, { nullable: false })
  data!: WorkspaceUpdateInput;

  @TypeGraphQL.Field(_type => WorkspaceWhereUniqueInput, { nullable: false })
  where!: WorkspaceWhereUniqueInput;
}

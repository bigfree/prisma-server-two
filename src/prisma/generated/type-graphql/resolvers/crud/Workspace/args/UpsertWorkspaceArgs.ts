import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WorkspaceCreateInput } from "../../../inputs/WorkspaceCreateInput";
import { WorkspaceUpdateInput } from "../../../inputs/WorkspaceUpdateInput";
import { WorkspaceWhereUniqueInput } from "../../../inputs/WorkspaceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertWorkspaceArgs {
  @TypeGraphQL.Field(_type => WorkspaceWhereUniqueInput, { nullable: false })
  where!: WorkspaceWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkspaceCreateInput, { nullable: false })
  create!: WorkspaceCreateInput;

  @TypeGraphQL.Field(_type => WorkspaceUpdateInput, { nullable: false })
  update!: WorkspaceUpdateInput;
}

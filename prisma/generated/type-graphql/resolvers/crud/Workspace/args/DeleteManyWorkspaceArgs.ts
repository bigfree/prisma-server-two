import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WorkspaceWhereInput } from "../../../inputs/WorkspaceWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWorkspaceArgs {
  @TypeGraphQL.Field(_type => WorkspaceWhereInput, { nullable: true })
  where?: WorkspaceWhereInput | undefined;
}

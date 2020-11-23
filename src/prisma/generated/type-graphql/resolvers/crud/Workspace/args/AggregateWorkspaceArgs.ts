import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WorkspaceOrderByInput } from "../../../inputs/WorkspaceOrderByInput";
import { WorkspaceWhereInput } from "../../../inputs/WorkspaceWhereInput";
import { WorkspaceWhereUniqueInput } from "../../../inputs/WorkspaceWhereUniqueInput";
import { WorkspaceDistinctFieldEnum } from "../../../../enums/WorkspaceDistinctFieldEnum";

@TypeGraphQL.ArgsType()
export class AggregateWorkspaceArgs {
  @TypeGraphQL.Field(_type => WorkspaceWhereInput, { nullable: true })
  where?: WorkspaceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WorkspaceOrderByInput], { nullable: true })
  orderBy?: WorkspaceOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkspaceWhereUniqueInput, { nullable: true })
  cursor?: WorkspaceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [WorkspaceDistinctFieldEnum], { nullable: true })
  distinct?: Array<"id" | "name" | "slug" | "description" | "image" | "createdAt" | "updatedAt" | "deletedAt" | "userId"> | undefined;
}

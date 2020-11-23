import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { WorkspaceWhereInput } from "../inputs/WorkspaceWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WorkspaceListRelationFilter {
  @TypeGraphQL.Field(_type => WorkspaceWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: WorkspaceWhereInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: WorkspaceWhereInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: WorkspaceWhereInput | undefined;
}

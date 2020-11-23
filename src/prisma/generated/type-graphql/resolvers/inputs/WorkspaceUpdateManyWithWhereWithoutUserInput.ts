import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { WorkspaceScalarWhereInput } from "../inputs/WorkspaceScalarWhereInput";
import { WorkspaceUpdateManyMutationInput } from "../inputs/WorkspaceUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WorkspaceUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => WorkspaceScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: WorkspaceScalarWhereInput;

  @TypeGraphQL.Field(_type => WorkspaceUpdateManyMutationInput, {
    nullable: false,
    description: undefined
  })
  data!: WorkspaceUpdateManyMutationInput;
}

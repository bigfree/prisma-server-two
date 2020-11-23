import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { WorkspaceCreateWithoutUserInput } from "../inputs/WorkspaceCreateWithoutUserInput";
import { WorkspaceUpdateWithoutUserInput } from "../inputs/WorkspaceUpdateWithoutUserInput";
import { WorkspaceWhereUniqueInput } from "../inputs/WorkspaceWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WorkspaceUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => WorkspaceWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: WorkspaceWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkspaceUpdateWithoutUserInput, {
    nullable: false,
    description: undefined
  })
  update!: WorkspaceUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => WorkspaceCreateWithoutUserInput, {
    nullable: false,
    description: undefined
  })
  create!: WorkspaceCreateWithoutUserInput;
}

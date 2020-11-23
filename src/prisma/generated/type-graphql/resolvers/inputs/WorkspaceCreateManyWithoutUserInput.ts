import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { WorkspaceCreateOrConnectWithoutuserInput } from "../inputs/WorkspaceCreateOrConnectWithoutuserInput";
import { WorkspaceCreateWithoutUserInput } from "../inputs/WorkspaceCreateWithoutUserInput";
import { WorkspaceWhereUniqueInput } from "../inputs/WorkspaceWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WorkspaceCreateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [WorkspaceCreateWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  create?: WorkspaceCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspaceWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: WorkspaceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspaceCreateOrConnectWithoutuserInput], {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: WorkspaceCreateOrConnectWithoutuserInput[] | undefined;
}

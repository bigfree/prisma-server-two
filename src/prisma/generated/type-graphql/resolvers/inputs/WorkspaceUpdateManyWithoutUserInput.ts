import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { WorkspaceCreateOrConnectWithoutuserInput } from "../inputs/WorkspaceCreateOrConnectWithoutuserInput";
import { WorkspaceCreateWithoutUserInput } from "../inputs/WorkspaceCreateWithoutUserInput";
import { WorkspaceScalarWhereInput } from "../inputs/WorkspaceScalarWhereInput";
import { WorkspaceUpdateManyWithWhereWithoutUserInput } from "../inputs/WorkspaceUpdateManyWithWhereWithoutUserInput";
import { WorkspaceUpdateWithWhereUniqueWithoutUserInput } from "../inputs/WorkspaceUpdateWithWhereUniqueWithoutUserInput";
import { WorkspaceUpsertWithWhereUniqueWithoutUserInput } from "../inputs/WorkspaceUpsertWithWhereUniqueWithoutUserInput";
import { WorkspaceWhereUniqueInput } from "../inputs/WorkspaceWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WorkspaceUpdateManyWithoutUserInput {
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

  @TypeGraphQL.Field(_type => [WorkspaceWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: WorkspaceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspaceWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: WorkspaceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspaceWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: WorkspaceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspaceUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  update?: WorkspaceUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspaceUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: WorkspaceUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspaceScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: WorkspaceScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspaceUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  upsert?: WorkspaceUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspaceCreateOrConnectWithoutuserInput], {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: WorkspaceCreateOrConnectWithoutuserInput[] | undefined;
}

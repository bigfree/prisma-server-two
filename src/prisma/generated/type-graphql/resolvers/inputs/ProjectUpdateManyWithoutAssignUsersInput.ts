import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProjectCreateOrConnectWithoutassignUsersInput } from "../inputs/ProjectCreateOrConnectWithoutassignUsersInput";
import { ProjectCreateWithoutAssignUsersInput } from "../inputs/ProjectCreateWithoutAssignUsersInput";
import { ProjectScalarWhereInput } from "../inputs/ProjectScalarWhereInput";
import { ProjectUpdateManyWithWhereWithoutAssignUsersInput } from "../inputs/ProjectUpdateManyWithWhereWithoutAssignUsersInput";
import { ProjectUpdateWithWhereUniqueWithoutAssignUsersInput } from "../inputs/ProjectUpdateWithWhereUniqueWithoutAssignUsersInput";
import { ProjectUpsertWithWhereUniqueWithoutAssignUsersInput } from "../inputs/ProjectUpsertWithWhereUniqueWithoutAssignUsersInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProjectUpdateManyWithoutAssignUsersInput {
  @TypeGraphQL.Field(_type => [ProjectCreateWithoutAssignUsersInput], {
    nullable: true,
    description: undefined
  })
  create?: ProjectCreateWithoutAssignUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpdateWithWhereUniqueWithoutAssignUsersInput], {
    nullable: true,
    description: undefined
  })
  update?: ProjectUpdateWithWhereUniqueWithoutAssignUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpdateManyWithWhereWithoutAssignUsersInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: ProjectUpdateManyWithWhereWithoutAssignUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: ProjectScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpsertWithWhereUniqueWithoutAssignUsersInput], {
    nullable: true,
    description: undefined
  })
  upsert?: ProjectUpsertWithWhereUniqueWithoutAssignUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectCreateOrConnectWithoutassignUsersInput], {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutassignUsersInput[] | undefined;
}

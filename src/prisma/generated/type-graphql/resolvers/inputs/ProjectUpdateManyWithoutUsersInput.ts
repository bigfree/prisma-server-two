import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProjectCreateOrConnectWithoutusersInput } from "../inputs/ProjectCreateOrConnectWithoutusersInput";
import { ProjectCreateWithoutUsersInput } from "../inputs/ProjectCreateWithoutUsersInput";
import { ProjectScalarWhereInput } from "../inputs/ProjectScalarWhereInput";
import { ProjectUpdateManyWithWhereWithoutUsersInput } from "../inputs/ProjectUpdateManyWithWhereWithoutUsersInput";
import { ProjectUpdateWithWhereUniqueWithoutUsersInput } from "../inputs/ProjectUpdateWithWhereUniqueWithoutUsersInput";
import { ProjectUpsertWithWhereUniqueWithoutUsersInput } from "../inputs/ProjectUpsertWithWhereUniqueWithoutUsersInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProjectUpdateManyWithoutUsersInput {
  @TypeGraphQL.Field(_type => [ProjectCreateWithoutUsersInput], {
    nullable: true,
    description: undefined
  })
  create?: ProjectCreateWithoutUsersInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [ProjectUpdateWithWhereUniqueWithoutUsersInput], {
    nullable: true,
    description: undefined
  })
  update?: ProjectUpdateWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpdateManyWithWhereWithoutUsersInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: ProjectUpdateManyWithWhereWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: ProjectScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpsertWithWhereUniqueWithoutUsersInput], {
    nullable: true,
    description: undefined
  })
  upsert?: ProjectUpsertWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectCreateOrConnectWithoutusersInput], {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutusersInput[] | undefined;
}

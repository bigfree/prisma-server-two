import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProjectCreateOrConnectWithoutprojectOwnerInput } from "../inputs/ProjectCreateOrConnectWithoutprojectOwnerInput";
import { ProjectCreateWithoutProjectOwnerInput } from "../inputs/ProjectCreateWithoutProjectOwnerInput";
import { ProjectScalarWhereInput } from "../inputs/ProjectScalarWhereInput";
import { ProjectUpdateManyWithWhereWithoutProjectOwnerInput } from "../inputs/ProjectUpdateManyWithWhereWithoutProjectOwnerInput";
import { ProjectUpdateWithWhereUniqueWithoutProjectOwnerInput } from "../inputs/ProjectUpdateWithWhereUniqueWithoutProjectOwnerInput";
import { ProjectUpsertWithWhereUniqueWithoutProjectOwnerInput } from "../inputs/ProjectUpsertWithWhereUniqueWithoutProjectOwnerInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProjectUpdateManyWithoutProjectOwnerInput {
  @TypeGraphQL.Field(_type => [ProjectCreateWithoutProjectOwnerInput], {
    nullable: true,
    description: undefined
  })
  create?: ProjectCreateWithoutProjectOwnerInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [ProjectUpdateWithWhereUniqueWithoutProjectOwnerInput], {
    nullable: true,
    description: undefined
  })
  update?: ProjectUpdateWithWhereUniqueWithoutProjectOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpdateManyWithWhereWithoutProjectOwnerInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: ProjectUpdateManyWithWhereWithoutProjectOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: ProjectScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpsertWithWhereUniqueWithoutProjectOwnerInput], {
    nullable: true,
    description: undefined
  })
  upsert?: ProjectUpsertWithWhereUniqueWithoutProjectOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectCreateOrConnectWithoutprojectOwnerInput], {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutprojectOwnerInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProjectCreateOrConnectWithoutassignUsersInput } from "../inputs/ProjectCreateOrConnectWithoutassignUsersInput";
import { ProjectCreateWithoutAssignUsersInput } from "../inputs/ProjectCreateWithoutAssignUsersInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProjectCreateManyWithoutAssignUsersInput {
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

  @TypeGraphQL.Field(_type => [ProjectCreateOrConnectWithoutassignUsersInput], {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutassignUsersInput[] | undefined;
}

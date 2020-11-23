import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProjectCreateWithoutAssignUsersInput } from "../inputs/ProjectCreateWithoutAssignUsersInput";
import { ProjectUpdateWithoutAssignUsersInput } from "../inputs/ProjectUpdateWithoutAssignUsersInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProjectUpsertWithWhereUniqueWithoutAssignUsersInput {
  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: ProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutAssignUsersInput, {
    nullable: false,
    description: undefined
  })
  update!: ProjectUpdateWithoutAssignUsersInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutAssignUsersInput, {
    nullable: false,
    description: undefined
  })
  create!: ProjectCreateWithoutAssignUsersInput;
}

import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProjectCreateWithoutUsersInput } from "../inputs/ProjectCreateWithoutUsersInput";
import { ProjectUpdateWithoutUsersInput } from "../inputs/ProjectUpdateWithoutUsersInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProjectUpsertWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: ProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutUsersInput, {
    nullable: false,
    description: undefined
  })
  update!: ProjectUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutUsersInput, {
    nullable: false,
    description: undefined
  })
  create!: ProjectCreateWithoutUsersInput;
}

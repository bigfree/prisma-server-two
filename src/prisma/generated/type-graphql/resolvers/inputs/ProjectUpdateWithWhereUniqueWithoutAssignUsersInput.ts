import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProjectUpdateWithoutAssignUsersInput } from "../inputs/ProjectUpdateWithoutAssignUsersInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProjectUpdateWithWhereUniqueWithoutAssignUsersInput {
  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: ProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutAssignUsersInput, {
    nullable: false,
    description: undefined
  })
  data!: ProjectUpdateWithoutAssignUsersInput;
}

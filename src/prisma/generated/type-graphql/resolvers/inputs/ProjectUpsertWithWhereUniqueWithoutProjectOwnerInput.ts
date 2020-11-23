import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProjectCreateWithoutProjectOwnerInput } from "../inputs/ProjectCreateWithoutProjectOwnerInput";
import { ProjectUpdateWithoutProjectOwnerInput } from "../inputs/ProjectUpdateWithoutProjectOwnerInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProjectUpsertWithWhereUniqueWithoutProjectOwnerInput {
  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: ProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutProjectOwnerInput, {
    nullable: false,
    description: undefined
  })
  update!: ProjectUpdateWithoutProjectOwnerInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutProjectOwnerInput, {
    nullable: false,
    description: undefined
  })
  create!: ProjectCreateWithoutProjectOwnerInput;
}

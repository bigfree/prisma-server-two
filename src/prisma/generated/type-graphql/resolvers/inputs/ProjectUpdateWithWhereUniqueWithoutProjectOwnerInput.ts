import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProjectUpdateWithoutProjectOwnerInput } from "../inputs/ProjectUpdateWithoutProjectOwnerInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProjectUpdateWithWhereUniqueWithoutProjectOwnerInput {
  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: ProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutProjectOwnerInput, {
    nullable: false,
    description: undefined
  })
  data!: ProjectUpdateWithoutProjectOwnerInput;
}

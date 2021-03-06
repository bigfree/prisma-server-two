import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProjectScalarWhereInput } from "../inputs/ProjectScalarWhereInput";
import { ProjectUpdateManyMutationInput } from "../inputs/ProjectUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProjectUpdateManyWithWhereWithoutAssignUsersInput {
  @TypeGraphQL.Field(_type => ProjectScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: ProjectScalarWhereInput;

  @TypeGraphQL.Field(_type => ProjectUpdateManyMutationInput, {
    nullable: false,
    description: undefined
  })
  data!: ProjectUpdateManyMutationInput;
}

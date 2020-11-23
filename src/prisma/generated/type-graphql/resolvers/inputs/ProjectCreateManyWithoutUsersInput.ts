import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProjectCreateOrConnectWithoutusersInput } from "../inputs/ProjectCreateOrConnectWithoutusersInput";
import { ProjectCreateWithoutUsersInput } from "../inputs/ProjectCreateWithoutUsersInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProjectCreateManyWithoutUsersInput {
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

  @TypeGraphQL.Field(_type => [ProjectCreateOrConnectWithoutusersInput], {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutusersInput[] | undefined;
}

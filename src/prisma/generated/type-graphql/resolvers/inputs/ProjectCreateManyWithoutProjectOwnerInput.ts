import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProjectCreateOrConnectWithoutprojectOwnerInput } from "../inputs/ProjectCreateOrConnectWithoutprojectOwnerInput";
import { ProjectCreateWithoutProjectOwnerInput } from "../inputs/ProjectCreateWithoutProjectOwnerInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProjectCreateManyWithoutProjectOwnerInput {
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

  @TypeGraphQL.Field(_type => [ProjectCreateOrConnectWithoutprojectOwnerInput], {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutprojectOwnerInput[] | undefined;
}

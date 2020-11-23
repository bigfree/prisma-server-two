import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProjectCreateManyWithoutProjectOwnerInput } from "../inputs/ProjectCreateManyWithoutProjectOwnerInput";
import { ProjectCreateManyWithoutUsersInput } from "../inputs/ProjectCreateManyWithoutUsersInput";
import { TaskCreateManyWithoutUserInput } from "../inputs/TaskCreateManyWithoutUserInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserCreateWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  password!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  deletedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true,
    description: undefined
  })
  role?: "USER" | "PROJECTOWNER" | "WORKSPACEADMIN" | "WORKSPACEOWNER" | undefined;

  @TypeGraphQL.Field(_type => TaskCreateManyWithoutUserInput, {
    nullable: true,
    description: undefined
  })
  tasks?: TaskCreateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateManyWithoutUsersInput, {
    nullable: true,
    description: undefined
  })
  projects?: ProjectCreateManyWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateManyWithoutProjectOwnerInput, {
    nullable: true,
    description: undefined
  })
  project?: ProjectCreateManyWithoutProjectOwnerInput | undefined;
}

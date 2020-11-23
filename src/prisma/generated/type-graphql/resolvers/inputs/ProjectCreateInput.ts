import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserCreateManyWithoutProjectsInput } from "../inputs/UserCreateManyWithoutProjectsInput";
import { UserCreateOneWithoutProjectInput } from "../inputs/UserCreateOneWithoutProjectInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProjectCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  name!: string;

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

  @TypeGraphQL.Field(_type => UserCreateOneWithoutProjectInput, {
    nullable: false,
    description: undefined
  })
  projectOwner!: UserCreateOneWithoutProjectInput;

  @TypeGraphQL.Field(_type => UserCreateManyWithoutProjectsInput, {
    nullable: true,
    description: undefined
  })
  users?: UserCreateManyWithoutProjectsInput | undefined;
}

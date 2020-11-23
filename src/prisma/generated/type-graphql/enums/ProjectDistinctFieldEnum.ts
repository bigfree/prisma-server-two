import * as TypeGraphQL from "type-graphql";

export enum ProjectDistinctFieldEnum {
  id = "id",
  name = "name",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  deletedAt = "deletedAt",
  userId = "userId"
}
TypeGraphQL.registerEnumType(ProjectDistinctFieldEnum, {
  name: "ProjectDistinctFieldEnum",
  description: undefined,
});

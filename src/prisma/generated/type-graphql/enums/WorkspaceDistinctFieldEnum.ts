import * as TypeGraphQL from "type-graphql";

export enum WorkspaceDistinctFieldEnum {
  id = "id",
  name = "name",
  slug = "slug",
  description = "description",
  image = "image",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  deletedAt = "deletedAt",
  userId = "userId"
}
TypeGraphQL.registerEnumType(WorkspaceDistinctFieldEnum, {
  name: "WorkspaceDistinctFieldEnum",
  description: undefined,
});

import * as TypeGraphQL from "type-graphql";

export enum WorkspaceDistinctFieldEnum {
  id = "id",
  name = "name",
  slug = "slug",
  description = "description",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  deletedAt = "deletedAt"
}
TypeGraphQL.registerEnumType(WorkspaceDistinctFieldEnum, {
  name: "WorkspaceDistinctFieldEnum",
  description: undefined,
});

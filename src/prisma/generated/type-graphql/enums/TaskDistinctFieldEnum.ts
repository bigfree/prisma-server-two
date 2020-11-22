import * as TypeGraphQL from "type-graphql";

export enum TaskDistinctFieldEnum {
  id = "id",
  name = "name",
  content = "content",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  deletedAt = "deletedAt",
  archiveAt = "archiveAt",
  userId = "userId"
}
TypeGraphQL.registerEnumType(TaskDistinctFieldEnum, {
  name: "TaskDistinctFieldEnum",
  description: undefined,
});

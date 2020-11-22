import * as TypeGraphQL from "type-graphql";

export enum LabelDistinctFieldEnum {
  id = "id",
  name = "name",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(LabelDistinctFieldEnum, {
  name: "LabelDistinctFieldEnum",
  description: undefined,
});

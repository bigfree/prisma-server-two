import * as TypeGraphQL from "type-graphql";

export enum Role {
  USER = "USER",
  PROJECTOWNER = "PROJECTOWNER",
  WORKSPACEADMIN = "WORKSPACEADMIN",
  WORKSPACEOWNER = "WORKSPACEOWNER"
}
TypeGraphQL.registerEnumType(Role, {
  name: "Role",
  description: undefined,
});

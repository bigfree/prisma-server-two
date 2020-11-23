import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserListRelationFilter {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: UserWhereInput | undefined;
}

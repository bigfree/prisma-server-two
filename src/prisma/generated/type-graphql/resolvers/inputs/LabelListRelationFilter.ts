import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { LabelWhereInput } from "../inputs/LabelWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class LabelListRelationFilter {
  @TypeGraphQL.Field(_type => LabelWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: LabelWhereInput | undefined;

  @TypeGraphQL.Field(_type => LabelWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: LabelWhereInput | undefined;

  @TypeGraphQL.Field(_type => LabelWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: LabelWhereInput | undefined;
}

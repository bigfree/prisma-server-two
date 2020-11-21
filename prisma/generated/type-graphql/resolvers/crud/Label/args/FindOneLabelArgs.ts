import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { LabelWhereUniqueInput } from "../../../inputs/LabelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneLabelArgs {
  @TypeGraphQL.Field(_type => LabelWhereUniqueInput, { nullable: false })
  where!: LabelWhereUniqueInput;
}

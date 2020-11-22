import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { LabelWhereUniqueInput } from "../../../inputs/LabelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteLabelArgs {
  @TypeGraphQL.Field(_type => LabelWhereUniqueInput, { nullable: false })
  where!: LabelWhereUniqueInput;
}

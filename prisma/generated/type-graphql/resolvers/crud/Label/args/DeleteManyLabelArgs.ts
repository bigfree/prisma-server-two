import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { LabelWhereInput } from "../../../inputs/LabelWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLabelArgs {
  @TypeGraphQL.Field(_type => LabelWhereInput, { nullable: true })
  where?: LabelWhereInput | undefined;
}

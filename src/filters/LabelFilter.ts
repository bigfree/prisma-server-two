import { Field, InputType } from "type-graphql";
import { LabelFilter as ILabelFilter } from "../prisma/client";
import { LabelWhereInput } from "../schemas/label/LabelInputs";

@InputType({ description: "DateTime filter" })
export class LabelFilter implements Partial<ILabelFilter> {
    @Field(() => LabelWhereInput, { nullable: true })
    every?: LabelWhereInput;

    @Field(() => LabelWhereInput, { nullable: true })
    some?: LabelWhereInput;

    @Field(() => LabelWhereInput, { nullable: true })
    none?: LabelWhereInput;
}
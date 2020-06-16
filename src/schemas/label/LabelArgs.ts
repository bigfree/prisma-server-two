import { Field, ID, InputType, Int } from "type-graphql";
import { IsBoolean, IsInt, IsNotEmpty, IsString } from "class-validator";
import {
    FindManyLabelArgs as IFindManyLabelArgs,
    FindManyTaskArgs as IFindManyTaskArgs,
    FindOneLabelArgs as IFindOneLabelArgs,
    LabelCreateArgs as ILabelCreateArgs,
    LabelInclude as ILabelInclude,
    LabelSelect as ILabelSelect,
    LabelUpdateArgs as ILabelUpdateArgs,
    LabelWhereUniqueInput as ILabelWhereUniqueInput,
} from "../../prisma/client";
import {
    LabelCreateInput,
    LabelOrderByInput,
    LabelUpdateInput,
    LabelWhereInput,
    LabelWhereUniqueInput
} from "./LabelInputs";
import { FindManyTaskArgs } from "../task/TaskArgs";

@InputType({ description: "Label select" })
export class LabelSelect implements Partial<ILabelSelect> {

    @Field(() => Boolean, { nullable: true })
    @IsBoolean()
    id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsBoolean()
    name?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsBoolean()
    createdAt?: boolean;

    @Field(() => FindManyTaskArgs, { nullable: true })
    tasks?: boolean | IFindManyTaskArgs;
}

@InputType({ description: "Label include" })
export class LabelInclude implements Partial<ILabelInclude> {

    @Field(() => FindManyTaskArgs, { nullable: true })
    tasks?: boolean | FindManyTaskArgs;
}

@InputType({ description: "Label where unique arguments" })
export class LabelWhereUniqueArgs implements Partial<ILabelWhereUniqueInput> {

    @Field(() => ID, { nullable: true })
    @IsString()
    @IsNotEmpty()
    id?: string;

    @Field(() => String, { nullable: true })
    @IsString()
    @IsNotEmpty()
    name?: string;
}

@InputType({ description: "Label create arguments" })
export class LabelCreateArgs implements Partial<ILabelCreateArgs> {

    @Field(() => LabelSelect, { nullable: true })
    select?: LabelSelect | null;

    @Field(() => LabelInclude, { nullable: true })
    include?: LabelInclude | null;

    @Field(() => LabelCreateInput, { nullable: true })
    data: LabelCreateInput;
}

@InputType({ description: "Label update arguments" })
export class LabelUpdateArgs implements Partial<ILabelUpdateArgs> {

    @Field(() => LabelSelect, { nullable: true })
    select?: LabelSelect | null

    @Field(() => LabelInclude, { nullable: true })
    include?: LabelInclude | null

    @Field(() => LabelUpdateInput, { nullable: true })
    data: LabelUpdateInput

    @Field(() => LabelWhereUniqueInput, { nullable: true })
    where: LabelWhereUniqueInput
}

@InputType({ description: "Find one label arguments" })
export class FindOneLabelArgs implements Partial<IFindOneLabelArgs> {
    @Field(() => LabelSelect, { nullable: true })
    select?: LabelSelect | null;

    @Field(() => LabelInclude, { nullable: true })
    include?: LabelInclude | null;

    @Field(() => LabelWhereUniqueArgs)
    where: LabelWhereUniqueArgs;
}

@InputType({ description: "Find many label arguments" })
export class FindManyLabelArgs implements Partial<IFindManyLabelArgs> {

    @Field(() => LabelSelect, { nullable: true })
    select?: LabelSelect | null;

    @Field(() => LabelInclude, { nullable: true })
    include?: LabelInclude | null;

    @Field(() => LabelWhereInput, { nullable: true })
    where?: LabelWhereInput;

    @Field(() => LabelOrderByInput, { nullable: true })
    orderBy?: LabelOrderByInput;

    @Field(() => LabelWhereUniqueInput, { nullable: true })
    cursor?: LabelWhereUniqueInput;

    @Field(() => Int, { nullable: true })
    @IsInt()
    take?: number;

    @Field(() => Int, { nullable: true })
    @IsInt()
    skip?: number;
}
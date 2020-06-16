import { ArgsType, Field, ID } from "type-graphql";
import { IsBoolean, IsInt, IsNotEmpty, IsString } from "class-validator";
import {
    FindManyTaskArgs as IFindManyTaskArgs,
    FindOneLabelArgs as IFindOneLabelArgs,
    LabelInclude as ILabelInclude,
    LabelSelect as ILabelSelect,
    LabelWhereUniqueInput as ILabelWhereUniqueInput
} from "../../prisma/client";
import Label from "./Label";
import { FindManyTaskArgs } from "../task/TaskFilter";

/**
 * LabelSelect
 */
@ArgsType()
export class LabelSelect implements Partial<ILabelSelect> {

    @Field(type => Boolean, { nullable: true })
    @IsBoolean()
    id?: boolean;

    @Field(type => Boolean, { nullable: true })
    @IsBoolean()
    name?: boolean;

    @Field(type => Boolean, { nullable: true })
    @IsBoolean()
    createdAt?: boolean;

    @Field(type => FindManyTaskArgs, { nullable: true })
    tasks?: boolean | IFindManyTaskArgs;
}

/**
 * LabelInclude
 */
@ArgsType()
export class LabelInclude implements Partial<ILabelInclude> {
    @Field(type => FindManyTaskArgs, { nullable: true })
    tasks?: boolean | IFindManyTaskArgs;
}

/**
 * LabelWhereUniqueInput
 */
@ArgsType()
export class LabelWhereUniqueInput implements Partial<ILabelWhereUniqueInput> {

    @Field(type => ID, { nullable: true })
    @IsString()
    @IsNotEmpty()
    id?: string;

    @Field(type => String, { nullable: true })
    @IsString()
    @IsNotEmpty()
    name?: string;
}

/**
 * FindOneLabelArgs
 */
@ArgsType()
export class FindOneLabelArgs implements Partial<IFindOneLabelArgs> {

    @Field(type => LabelSelect, { nullable: true })
    select?: ILabelSelect | null;

    @Field(type => LabelInclude, { nullable: true })
    include?: ILabelInclude;

    @Field(type => LabelWhereUniqueInput)
    where: ILabelWhereUniqueInput;
}

/**
 * LabelsFilter
 */
@ArgsType()
export class LabelsFilter implements Partial<Label> {

    @Field(type => String, { nullable: true })
    @IsString()
    name?: string;

    @Field(type => ID, { nullable: true })
    @IsInt()
    idTask?: string;
}
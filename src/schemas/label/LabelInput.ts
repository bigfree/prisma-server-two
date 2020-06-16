import { Field, InputType } from "type-graphql";
import {
    LabelCreateInput as ILabelCreateInput,
    LabelCreateManyWithoutTasksInput as ILabelCreateManyWithoutTasksInput,
    LabelCreateWithoutTasksInput as ILabelCreateWithoutTasksInput,
    LabelUpdateManyWithoutTasksInput as ILabelUpdateManyWithoutTasksInput,
    LabelWhereUniqueInput as ILabelWhereUniqueInput
} from "../../prisma/client";
import { IsNotEmpty, IsString } from "class-validator";

/**
 * Create label to other Model
 */
@InputType({ description: "Create label to other Model" })
export class LabelCreateWithoutTasksInput implements Partial<ILabelCreateWithoutTasksInput> {

    @Field(() => String, { nullable: true })
    @IsString()
    @IsNotEmpty()
    name: string;
}

/**
 * Connect label to other Model
 */
@InputType({ description: "Connect label to other Model" })
export class LabelWhereUniqueInput implements Partial<ILabelWhereUniqueInput> {

    @Field(() => String, { nullable: true })
    @IsString()
    @IsNotEmpty()
    id?: string;
}

/**
 * Label create many without tasks input
 */
@InputType({ description: "Label create many without tasks input" })
export class LabelCreateManyWithoutTasksInput implements Partial<ILabelCreateManyWithoutTasksInput> {

    @Field(() => [LabelWhereUniqueInput], { nullable: true })
    connect?: LabelWhereUniqueInput[];

    @Field(() => [LabelCreateWithoutTasksInput], { nullable: true })
    create?: LabelCreateWithoutTasksInput;
}

/**
 * Label update many without tasks input
 */
@InputType({ description: "Label update many without tasks input" })
export class LabelUpdateManyWithoutTasksInput implements Partial<ILabelUpdateManyWithoutTasksInput> {

    @Field(() => [LabelWhereUniqueInput], { nullable: true })
    connect?: LabelWhereUniqueInput[];

    @Field(() => [LabelCreateWithoutTasksInput], { nullable: true })
    create?: LabelCreateWithoutTasksInput[];

    @Field(() => [LabelWhereUniqueInput], { nullable: true })
    disconnect?: LabelWhereUniqueInput[];
}

/**
 * Label Create Input
 */
@InputType({ description: "Create label input" })
export class LabelCreateInput implements Partial<ILabelCreateInput> {

    @Field(() => String)
    @IsString()
    @IsNotEmpty()
    name: string;
}
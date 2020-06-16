import { Field, ID, InputType } from "type-graphql";
import { IsDate, IsNotEmpty, IsString, IsUUID } from "class-validator";
import {
    Enumerable,
    LabelCreateInput as ILabelCreateInput,
    LabelCreateManyWithoutTasksInput as ILabelCreateManyWithoutTasksInput,
    LabelCreateWithoutTasksInput as ILabelCreateWithoutTasksInput,
    LabelOrderByInput as ILabelOrderByInput,
    LabelUpdateInput as ILabelUpdateInput,
    LabelUpdateManyWithoutTasksInput as ILabelUpdateManyWithoutTasksInput,
    LabelWhereInput as ILabelWhereInput,
    LabelWhereUniqueInput as ILabelWhereUniqueInput,
} from "../../prisma/client";
import { UUIDFilter } from "../../filters/UUIDFilter";
import { StringFilter } from "../../filters/StringFilter";
import { DateTimeFilter } from "../../filters/DateTimeFilter";
import { TaskArgs } from "../task/TaskArgs";
import { OrderByArg } from "../../enums/OrderByArg";

@InputType({ description: "Create label to other Model" })
export class LabelCreateWithoutTasksInput implements Partial<ILabelCreateWithoutTasksInput> {

    @Field(() => ID, { nullable: true })
    @IsUUID()
    @IsNotEmpty()
    id?: string;

    @Field(() => String, { nullable: true })
    @IsString()
    @IsNotEmpty()
    name: string;

    @Field(() => Date, { nullable: true })
    @IsDate()
    @IsNotEmpty()
    createdAt?: Date | string;
}

@InputType({ description: "Connect label to other Model" })
export class LabelWhereUniqueInput implements Partial<ILabelWhereUniqueInput> {

    @Field(() => String, { nullable: true })
    @IsString()
    @IsNotEmpty()
    id?: string;

    @Field(() => String, { nullable: true })
    @IsString()
    @IsNotEmpty()
    name?: string;
}

@InputType({ description: "Label where input" })
export class LabelWhereInput implements Partial<ILabelWhereInput> {

    @Field(() => UUIDFilter, { nullable: true })
    id?: string | UUIDFilter;

    @Field(() => StringFilter, { nullable: true })
    name?: string | StringFilter;

    @Field(() => DateTimeFilter, { nullable: true })
    createdAt?: Date | string | DateTimeFilter;

    @Field(() => TaskArgs, { nullable: true })
    tasks?: TaskArgs | null;

    @Field(() => LabelWhereInput, { nullable: true })
    AND?: Enumerable<LabelWhereInput>;

    @Field(() => [LabelWhereInput], { nullable: true })
    OR?: Array<LabelWhereInput>;

    @Field(() => [LabelWhereInput], { nullable: true })
    NOT?: Enumerable<LabelWhereInput>;
}

@InputType({ description: "Label create many without tasks input" })
export class LabelCreateManyWithoutTasksInput implements Partial<ILabelCreateManyWithoutTasksInput> {

    @Field(() => [LabelCreateWithoutTasksInput], { nullable: true })
    create?: LabelCreateWithoutTasksInput;

    @Field(() => [LabelWhereUniqueInput], { nullable: true })
    connect?: LabelWhereUniqueInput[];
}

@InputType({ description: "Label update many without tasks input" })
export class LabelUpdateManyWithoutTasksInput implements Partial<ILabelUpdateManyWithoutTasksInput> {

    @Field(() => [LabelWhereUniqueInput], { nullable: true })
    connect?: LabelWhereUniqueInput[];

    @Field(() => [LabelCreateWithoutTasksInput], { nullable: true })
    create?: LabelCreateWithoutTasksInput[];

    @Field(() => [LabelWhereUniqueInput], { nullable: true })
    disconnect?: LabelWhereUniqueInput[];
}

@InputType({ description: "Create label input" })
export class LabelCreateInput implements Partial<ILabelCreateInput> {

    @Field(() => String, { nullable: true })
    @IsUUID()
    @IsNotEmpty()
    id?: string;

    @Field(() => String)
    @IsString()
    @IsNotEmpty()
    name: string;

    @Field(() => Date, { nullable: true })
    @IsDate()
    @IsNotEmpty()
    createdAt?: Date | string;

    // Nebude sa zatial dat vytvarat task z labelu
    @Field(() => Boolean, { nullable: true })
    tasks?: null;
}

@InputType({ description: "Create label input" })
export class LabelOrderByInput implements Partial<ILabelOrderByInput> {

    @Field(() => OrderByArg, { nullable: true })
    id?: OrderByArg | null;

    @Field(() => OrderByArg, { nullable: true })
    name?: OrderByArg | null;

    @Field(() => OrderByArg, { nullable: true })
    createdAt?: OrderByArg | null;
}

@InputType({ description: "Update label input" })
export class LabelUpdateInput implements Partial<ILabelUpdateInput> {

    @Field(() => String, { nullable: true })
    @IsUUID()
    @IsNotEmpty()
    id?: string

    @Field(() => String, { nullable: true })
    @IsString()
    @IsNotEmpty()
    name?: string

    @Field(() => String, { nullable: true })
    @IsDate()
    @IsNotEmpty()
    createdAt?: Date | string
}


import { Field, InputType } from "type-graphql";
import { IsArray, IsDate, IsNotEmpty, IsString } from "class-validator";
import {
    Enumerable,
    TaskCreateWithoutUserInput as ITaskCreateWithoutUserInput,
    TaskFilter as ITaskFilter,
    TaskUpdateWithoutUserDataInput as ITaskUpdateWithoutUserDataInput,
    TaskWhereInput as ITaskWhereInput,
} from "../../prisma/client";
import { LabelCreateManyWithoutTasksInput, LabelUpdateManyWithoutTasksInput } from "../label/LabelInputs";
import { UUIDFilter } from "../../filters/UUIDFilter";
import { StringFilter } from "../../filters/StringFilter";
import { NullableStringFilter } from "../../filters/NullableStringFilter";
import { DateTimeFilter } from "../../filters/DateTimeFilter";
import { NullableDateTimeFilter } from "../../filters/NullableDateTimeFilter";
import { IntFilter } from "../../filters/IntFilter";
import { LabelFilter } from "../../filters/LabelFilter";
import { UserWhereInput } from "../user/UserInput";

@InputType()
export class TaskCreateInput implements Partial<ITaskCreateWithoutUserInput> {

    @Field(() => String)
    @IsString()
    @IsNotEmpty()
    name: string;

    @Field(() => String, { nullable: true })
    @IsString()
    content?: string;

    @Field(() => LabelCreateManyWithoutTasksInput, { nullable: true })
    labels?: LabelCreateManyWithoutTasksInput;
}

@InputType()
export class TaskWhereInput implements Partial<ITaskWhereInput> {

    @Field(() => UUIDFilter, { nullable: true })
    id?: string | UUIDFilter;

    @Field(() => StringFilter, { nullable: true })
    name?: string | StringFilter;

    @Field(() => NullableStringFilter, { nullable: true })
    content?: string | NullableStringFilter | null;

    @Field(() => DateTimeFilter, { nullable: true })
    createdAt?: Date | string | DateTimeFilter;

    @Field(() => NullableDateTimeFilter, { nullable: true })
    updatedAt?: Date | string | NullableDateTimeFilter | null;

    @Field(() => NullableDateTimeFilter, { nullable: true })
    deletedAt?: Date | string | NullableDateTimeFilter | null;

    @Field(() => NullableDateTimeFilter, { nullable: true })
    archiveAt?: Date | string | NullableDateTimeFilter | null;

    @Field(() => IntFilter, { nullable: true })
    userId?: number | IntFilter;

    @Field(() => LabelFilter, { nullable: true })
    labels?: LabelFilter | null;

    @Field(() => [TaskWhereInput], { nullable: true })
    @IsArray()
    AND?: Enumerable<TaskWhereInput>;

    @Field(() => [TaskWhereInput], { nullable: true })
    @IsArray()
    OR?: Array<TaskWhereInput>;

    @Field(() => [TaskWhereInput], { nullable: true })
    @IsArray()
    NOT?: Enumerable<TaskWhereInput>;

    @Field(() => UserWhereInput, { nullable: true })
    user?: UserWhereInput | null;
}

@InputType()
export class TaskFilter implements Partial<ITaskFilter> {
    @Field(() => TaskWhereInput, { nullable: true })
    every?: TaskWhereInput;

    @Field(() => TaskWhereInput, { nullable: true })
    some?: TaskWhereInput;

    @Field(() => TaskWhereInput, { nullable: true })
    none?: TaskWhereInput;
}

@InputType()
export class TaskUpdateInput implements Partial<ITaskUpdateWithoutUserDataInput> {

    @Field(() => String, { nullable: true })
    name?: string;

    @Field(() => String, { nullable: true })
    @IsString()
    content?: string;

    @Field(() => Date, { nullable: true })
    @IsDate()
    archiveAt?: string | null;

    @Field(() => String, { nullable: true })
    @IsDate()
    deletedAt?: string | null;

    @Field(() => LabelUpdateManyWithoutTasksInput, { nullable: true })
    labels?: LabelUpdateManyWithoutTasksInput;
}
import { Field, InputType } from "type-graphql";
import { IsDate, IsString } from "class-validator";
import {
    TaskCreateWithoutUserInput as ITaskCreateWithoutUserInput,
    TaskUpdateWithoutUserDataInput as ITaskUpdateWithoutUserDataInput
} from "../../prisma/client";
import { LabelCreateManyWithoutTasksInput, LabelUpdateManyWithoutTasksInput } from "../label/LabelInput";

@InputType()
export class TaskCreateInput implements Partial<ITaskCreateWithoutUserInput> {

    @Field(() => String)
    name: string;

    @Field(() => String, { nullable: true })
    content?: string;

    @Field(() => LabelCreateManyWithoutTasksInput, { nullable: true })
    labels?: LabelCreateManyWithoutTasksInput;
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
import { Field, InputType, Int, registerEnumType } from "type-graphql";
import { IsBoolean, IsInt, IsNotEmpty } from "class-validator";
import {
    FindManyTaskArgs as IFindManyTaskArgs,
    TaskFilter as ITaskFilter,
    TaskInclude as ITaskInclude,
    TaskOrderByInput as ITaskOrderByInput,
    TaskSelect as ITaskSelect,
    TaskWhereInput as ITaskWhereInput,
    TaskWhereUniqueInput as ITaskWhereUniqueInput,
} from "../../prisma/client";
import { FindManyLabelArgs } from "../label/LabelArgs";
import { UserArgs } from "../user/UserArgs";
import { TaskWhereInput } from "./TaskInputs";

@InputType()
export class TaskSelect implements Partial<ITaskSelect> {

    @Field(() => Boolean, { nullable: true })
    @IsBoolean()
    id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsBoolean()
    name?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsBoolean()
    content?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsBoolean()
    createdAt?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsBoolean()
    updatedAt?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsBoolean()
    deletedAt?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsBoolean()
    archiveAt?: boolean;

    @Field(() => UserArgs, { nullable: true })
    @IsBoolean()
    user?: boolean | UserArgs;

    @Field(() => Boolean, { nullable: true })
    @IsBoolean()
    userId?: boolean;

    @Field(() => FindManyLabelArgs, { nullable: true })
    @IsBoolean()
    labels?: boolean | FindManyLabelArgs;
}

@InputType()
export class TaskInclude implements Partial<ITaskInclude> {
    @Field(() => UserArgs, { nullable: true })
    user?: boolean | UserArgs;

    @Field(() => FindManyLabelArgs, { nullable: true })
    labels?: boolean | FindManyLabelArgs
}

@InputType()
export class TaskOrderByInput implements Partial<ITaskOrderByInput> {
    @Field(() => OrderByArg, { nullable: true })
    id?: OrderByArg | null;

    @Field(() => OrderByArg, { nullable: true })
    name?: OrderByArg | null;

    @Field(() => OrderByArg, { nullable: true })
    content?: OrderByArg | null;

    @Field(() => OrderByArg, { nullable: true })
    createdAt?: OrderByArg | null;

    @Field(() => OrderByArg, { nullable: true })
    updatedAt?: OrderByArg | null;

    @Field(() => OrderByArg, { nullable: true })
    deletedAt?: OrderByArg | null;

    @Field(() => OrderByArg, { nullable: true })
    archiveAt?: OrderByArg | null;

    @Field(() => OrderByArg, { nullable: true })
    userId?: OrderByArg | null;
}

@InputType()
export class TaskWhereUniqueInput implements Partial<ITaskWhereUniqueInput> {
    @Field(() => Int, { nullable: true })
    @IsInt()
    @IsNotEmpty()
    id?: number;
}

@InputType()
export class FindManyTaskArgs implements Partial<IFindManyTaskArgs> {

    @Field(() => TaskSelect, { nullable: true })
    select?: ITaskSelect | null;

    @Field(() => TaskInclude, { nullable: true })
    include?: ITaskInclude | null;

    @Field(() => TaskWhereInput, { nullable: true })
    where?: ITaskWhereInput;

    @Field(() => TaskOrderByInput, { nullable: true })
    orderBy?: ITaskOrderByInput;

    @Field(() => TaskWhereUniqueInput, { nullable: true })
    cursor?: ITaskWhereUniqueInput;

    @Field(() => Int, { nullable: true })
    @IsInt()
    take?: number;

    @Field(() => Int, { nullable: true })
    @IsInt()
    skip?: number;
}

@InputType()
export class TaskArgs implements Partial<ITaskFilter> {
    @Field(() => TaskWhereInput, { nullable: true })
    every?: TaskWhereInput;

    @Field(() => TaskWhereInput, { nullable: true })
    some?: TaskWhereInput;

    @Field(() => TaskWhereInput, { nullable: true })
    none?: TaskWhereInput;
}

enum OrderByArg {
    asc = 'asc',
    desc = 'desc',
}

registerEnumType(OrderByArg, {
    name: "TaskOrders", // this one is mandatory
});
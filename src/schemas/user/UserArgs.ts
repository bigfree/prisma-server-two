import { Field, InputType } from "type-graphql";
import { IsBoolean } from "class-validator";
import { UserArgs as IUserArgs, UserInclude as IUserInclude, UserSelect as IUserSelect } from "../../prisma/client";
import { FindManyTaskArgs } from "../task/TaskArgs";

@InputType()
export class UserSelect implements Partial<IUserSelect> {
    @Field(() => Boolean, { nullable: true })
    @IsBoolean()
    id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsBoolean()
    email?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsBoolean()
    name?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsBoolean()
    password?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsBoolean()
    createdAt?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsBoolean()
    updatedAt?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsBoolean()
    deletedAt?: boolean;

    @Field(() => FindManyTaskArgs, { nullable: true })
    @IsBoolean()
    tasks?: boolean | FindManyTaskArgs
}

@InputType()
export class UserInclude implements Partial<IUserInclude> {
    @Field(() => FindManyTaskArgs, { nullable: true })
    tasks?: boolean | FindManyTaskArgs
}

@InputType()
export class UserArgs implements Partial<IUserArgs> {
    @Field(() => UserSelect, { nullable: true })
    select?: UserSelect | null;

    @Field(() => UserInclude, { nullable: true })
    include?: UserInclude | null
}
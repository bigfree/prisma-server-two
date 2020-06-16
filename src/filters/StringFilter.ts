import { Field, InputType } from "type-graphql";
import { Enumerable, StringFilter as IStringFilter } from "../prisma/client";
import { IsArray, IsNotEmpty, IsString } from "class-validator";

@InputType({ description: "String filter" })
export class StringFilter implements Partial<IStringFilter> {
    @Field(() => String, { nullable: true })
    @IsString()
    @IsNotEmpty()
    equals?: string;

    @Field(() => StringFilter, { nullable: true })
    not?: string | StringFilter;

    @Field(() => [String], { nullable: true })
    @IsArray()
    @IsString({ each: true })
    in?: Enumerable<string>;

    @Field(() => [String], { nullable: true })
    @IsArray()
    @IsString({ each: true })
    notIn?: Enumerable<string>;

    @Field(() => String, { nullable: true })
    @IsString()
    @IsNotEmpty()
    lt?: string;

    @Field(() => String, { nullable: true })
    @IsString()
    @IsNotEmpty()
    lte?: string;

    @Field(() => String, { nullable: true })
    @IsString()
    @IsNotEmpty()
    gt?: string;

    @Field(() => String, { nullable: true })
    @IsString()
    @IsNotEmpty()
    gte?: string;

    @Field(() => String, { nullable: true })
    @IsString()
    @IsNotEmpty()
    contains?: string;

    @Field(() => String, { nullable: true })
    @IsString()
    @IsNotEmpty()
    startsWith?: string;

    @Field(() => String, { nullable: true })
    @IsString()
    @IsNotEmpty()
    endsWith?: string
}
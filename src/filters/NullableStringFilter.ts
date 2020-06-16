import { Field, InputType } from "type-graphql";
import { Enumerable, NullableStringFilter as INullableStringFilter } from "../prisma/client";
import { IsArray, IsString } from "class-validator";

@InputType()
export class NullableStringFilter implements Partial<INullableStringFilter> {
    @Field(() => String, { nullable: true })
    @IsString()
    equals?: string | null;

    @Field(() => NullableStringFilter, { nullable: true })
    not?: string | null | NullableStringFilter;

    @Field(() => [String], { nullable: true })
    @IsArray()
    @IsString({ each: true })
    in?: Enumerable<string> | null;

    @Field(() => [String], { nullable: true })
    @IsArray()
    @IsString({ each: true })
    notIn?: Enumerable<string> | null;

    @Field(() => String, { nullable: true })
    @IsString()
    lt?: string | null;

    @Field(() => String, { nullable: true })
    @IsString()
    lte?: string | null;

    @Field(() => String, { nullable: true })
    @IsString()
    gt?: string | null;

    @Field(() => String, { nullable: true })
    @IsString()
    gte?: string | null;

    @Field(() => String, { nullable: true })
    @IsString()
    contains?: string | null;

    @Field(() => String, { nullable: true })
    @IsString()
    startsWith?: string | null;

    @Field(() => String, { nullable: true })
    @IsString()
    endsWith?: string | null;
}
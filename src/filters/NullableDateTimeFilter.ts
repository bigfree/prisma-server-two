import { Field, InputType } from "type-graphql";
import { Enumerable, NullableDateTimeFilter as INullableDateTimeFilter } from "../prisma/client";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

@InputType()
export class NullableDateTimeFilter implements Partial<INullableDateTimeFilter> {
    @Field(() => Date, { nullable: true })
    @IsString()
    @IsDate()
    @IsNotEmpty()
    equals?: Date | string | null;

    @Field(() => Date, { nullable: true })
    not?: Date | string | null | NullableDateTimeFilter;

    @Field(() => [Date], { nullable: true })
    @IsString({ each: true })
    @IsDate({ each: true })
    in?: Enumerable<Date | string> | null;

    @Field(() => [Date], { nullable: true })
    @IsString({ each: true })
    @IsDate({ each: true })
    notIn?: Enumerable<Date | string> | null;

    @Field(() => Date, { nullable: true })
    @IsString()
    @IsDate()
    @IsNotEmpty()
    lt?: Date | string | null;

    @Field(() => Date, { nullable: true })
    @IsString()
    @IsDate()
    @IsNotEmpty()
    lte?: Date | string | null;

    @Field(() => Date, { nullable: true })
    @IsString()
    @IsDate()
    @IsNotEmpty()
    gt?: Date | string | null;

    @Field(() => Date, { nullable: true })
    @IsString()
    @IsDate()
    @IsNotEmpty()
    gte?: Date | string | null;

}
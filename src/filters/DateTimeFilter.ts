import { Field, InputType } from "type-graphql";
import { DateTimeFilter as IDateTimeFilter, Enumerable } from "../prisma/client";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

@InputType({ description: "DateTime filter" })
export class DateTimeFilter implements Partial<IDateTimeFilter> {
    @Field(() => Date, { nullable: true })
    @IsString()
    @IsDate()
    @IsNotEmpty()
    equals?: Date | string;

    @Field(() => Date, { nullable: true })
    not?: Date | string | DateTimeFilter;

    @Field(() => [Date], { nullable: true })
    @IsString({ each: true })
    @IsDate({ each: true })
    in?: Enumerable<Date | string>;

    @Field(() => [Date], { nullable: true })
    @IsString({ each: true })
    @IsDate({ each: true })
    notIn?: Enumerable<Date | string>;

    @Field(() => Date, { nullable: true })
    @IsString()
    @IsDate()
    @IsNotEmpty()
    lt?: Date | string;

    @Field(() => Date, { nullable: true })
    @IsString()
    @IsDate()
    @IsNotEmpty()
    lte?: Date | string;

    @Field(() => Date, { nullable: true })
    @IsString()
    @IsDate()
    @IsNotEmpty()
    gt?: Date | string;

    @Field(() => Date, { nullable: true })
    @IsString()
    @IsDate()
    @IsNotEmpty()
    gte?: Date | string
}
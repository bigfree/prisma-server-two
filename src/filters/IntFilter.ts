import { Field, InputType, Int } from "type-graphql";
import { Enumerable, IntFilter as IIntFilter } from "../prisma/client";
import { IsInt } from "class-validator";

@InputType({ description: "DateTime filter" })
export class IntFilter implements Partial<IIntFilter> {
    @Field(() => Int, { nullable: true })
    @IsInt()
    equals?: number;

    @Field(() => Int, { nullable: true })
    not?: number | IntFilter;

    @Field(() => [Int], { nullable: true })
    @IsInt({ each: true })
    in?: Enumerable<number>;

    @Field(() => [Int], { nullable: true })
    @IsInt({ each: true })
    notIn?: Enumerable<number>;

    @Field(() => Int, { nullable: true })
    @IsInt()
    lt?: number;

    @Field(() => Int, { nullable: true })
    @IsInt()
    lte?: number;

    @Field(() => Int, { nullable: true })
    @IsInt()
    gt?: number;

    @Field(() => Int, { nullable: true })
    @IsInt()
    gte?: number;

}
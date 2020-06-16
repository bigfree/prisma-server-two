import { ArgsType, Field, Int } from "type-graphql";
import { IsInt, IsNotEmpty, IsString, Max, Min } from "class-validator";
import { FindManyTaskArgs as IFindManyTaskArgs } from "../../prisma/client";

@ArgsType()
export class FindManyTaskArgs implements Partial<IFindManyTaskArgs> {

}

@ArgsType()
export class TaskFilter {
    @Field((type) => Int)
    @IsNotEmpty()
    @IsInt()
    id: number;
}

@ArgsType()
export class TasksFilter {
    @Field(() => String, { nullable: true })
    @IsString()
    name?: string;

    @Field((type) => Int, { nullable: true })
    @IsInt()
    userId?: number;

    @Field((type) => Int, { nullable: true })
    @Min(0)
    skip?: number;

    @Field((type) => Int, { nullable: true, defaultValue: 25 })
    @IsInt()
    @Min(1)
    @Max(100)
    take: number = 25;

    get startIndex(): number | undefined {
        return this.skip;
    }

    get endIndex(): number | undefined {
        if (this.skip === undefined || this.take === undefined) {
            return undefined;
        }
        return this.skip + this.take;
    }
}
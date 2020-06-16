import { Arg, Args, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import Label from "./Label";
import { PrismaClient } from "../../prisma/client";
import { FindOneLabelArgs, LabelsFilter } from "./LabelFilter";
import { LabelCreateInput } from "./LabelInput";

@Resolver(() => Label)
export default class {

    /**
     * Label detail
     * @param findOneLabelArgs
     * @param prisma
     */
    @Query(() => Label, { nullable: true, description: "Label detail" })
    @Authorized()
    async label(
        @Args() findOneLabelArgs: FindOneLabelArgs,
        @Ctx("prisma") prisma: PrismaClient
    ): Promise<Label | null> {
        try {
            return await prisma.label.findOne({
                ...findOneLabelArgs
            });
        } catch (err) {
            throw new Error(err);
        }
    }

    /**
     * Feed list of label
     * @param labelsFilter
     * @param prisma
     */
    @Query(() => [Label], { nullable: true, description: "Feed list of label" })
    @Authorized()
    async labels(
        @Args() labelsFilter: LabelsFilter,
        @Ctx("prisma") prisma: PrismaClient
    ): Promise<Array<Label>> {
        try {
            return await prisma.label.findMany({
                where: {
                    name: labelsFilter?.name,
                    tasks: {
                        every: {
                            id: labelsFilter?.idTask
                        }
                    }
                }
            });
        } catch (err) {
            throw new Error(err);
        }
    }

    /**
     * Create label detail
     * @param labelCreateInput
     * @param prisma
     */
    @Mutation(() => Label, { description: "Create label detail" })
    @Authorized()
    async createLabel(
        @Arg("input") labelCreateInput: LabelCreateInput,
        @Ctx("prisma") prisma: PrismaClient
    ): Promise<Label> {
        try {
            return await prisma.label.create({
                data: {
                    name: labelCreateInput.name
                }
            });
        } catch (err) {
            throw new Error(err);
        }
    }
}
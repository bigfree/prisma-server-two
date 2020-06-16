import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import Label from "./Label";
import { PrismaClient } from "../../prisma/client";
// import { FindOneLabelArgs, LabelsFilter } from "./LabelFilter";
import { FindManyLabelArgs, FindOneLabelArgs, LabelCreateArgs, LabelUpdateArgs } from "./LabelArgs";

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
        @Arg("input") findOneLabelArgs: FindOneLabelArgs,
        @Ctx("prisma") prisma: PrismaClient
    ): Promise<Label | null> {
        try {
            return await prisma.label.findOne({ ...findOneLabelArgs });
        } catch (err) {
            throw new Error(err);
        }
    }

    //
    /**
     * Feed list of label
     * @param findManyLabelArgs
     * @param prisma
     */
    @Query(() => [Label], { nullable: true, description: "Feed list of label" })
    @Authorized()
    async labels(
        @Arg("input", { nullable: true }) findManyLabelArgs: FindManyLabelArgs,
        @Ctx("prisma") prisma: PrismaClient
    ): Promise<Array<Label>> {
        try {
            return await prisma.label.findMany({ ...findManyLabelArgs });
        } catch (err) {
            throw new Error(err);
        }
    }

    /**
     * Create label detail
     * @param createArgs
     * @param prisma
     */
    @Mutation(() => Label, { description: "Create one label detail" })
    @Authorized()
    async createLabel(
        @Arg("input") createArgs: LabelCreateArgs,
        @Ctx("prisma") prisma: PrismaClient
    ): Promise<Label> {
        try {
            return await prisma.label.create({ ...createArgs });
        } catch (err) {
            throw new Error(err);
        }
    }

    /**
     * Update label detail
     * @param labelUpdateArgs
     * @param prisma
     */
    @Mutation(() => Label, { description: "Update one label detail" })
    @Authorized()
    async updateLabel(
        @Arg("input") labelUpdateArgs: LabelUpdateArgs,
        @Ctx("prisma") prisma: PrismaClient
    ): Promise<Label> {
        try {
            return await prisma.label.update({ ...labelUpdateArgs });
        } catch (err) {
            throw new Error(err);
        }
    }
}
import { z } from "zod";
import { sleep } from "~/lib/utils";
import { createTRPCRouter, procedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  createByEmailAndPassword: procedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await sleep(1000);
      return await ctx.prisma.user.create({
        data: {
          name: input.name,
          email: input.email,
          pass: input.password,
        },
      });
    }),

    createByEmailLdap: procedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await sleep(1000);
      return await ctx.prisma.user.create({
        data: {
          name: input.name,
          email: input.email,
        },
      });
    }),

  getMany: procedure
    .input(
      z.object({
        current: z.number().gt(0),
        pageSize: z.number().gt(0),
      })
    )
    .query(async ({ ctx, input }) => {
      await sleep(1000);
      const users = await ctx.prisma.user.findMany({
        skip: (input.current - 1) * input.pageSize,
        take: input.pageSize,
        orderBy: [{ createdAt: "asc" }],
      });
      const total = await ctx.prisma.user.count();
      return { users, total };
    }),

  getById: procedure.input(z.string()).query(async ({ ctx, input }) => {
    await sleep(1000);
    const user = ctx.prisma.user.findFirst({
      where: { id: input },
    });

    if (user) {
      return user;
    }

    throw new Error(`User with id ${input} not found`);
  }),

  updateById: procedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await sleep(2000);
      await ctx.prisma.user.update({
        where: { id: input.id },
        data: {
          name: input.name,
        },
      });
    }),

  deleteById: procedure.input(z.string()).mutation(async ({ ctx, input }) => {
    sleep(1000);
    await ctx.prisma.user.delete({ where: { id: input } });
  }),

  deleteMany: procedure
    .input(z.array(z.string()))
    .mutation(async ({ ctx, input }) => {
      await sleep(1000);
      await ctx.prisma.user.deleteMany({
        where: {
          id: { in: input },
        },
      });
    }),

  hello: procedure
    .input(z.object({ data: z.string() }))
    .query(async ({ input }) => {
      await sleep(1000);
      return { messagee: `hello ${input.data}` };
    }),

  helloMutation: procedure
    .input(z.object({ data: z.string() }))
    .mutation(async ({ input }) => {
      await sleep(1000);
      return { messagee: `hello ${input.data}` };
    }),
});

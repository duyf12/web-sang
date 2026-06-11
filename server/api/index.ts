import { userRouter } from "~/server/api/routers/user";
import { taskRouter } from "~/server/api/routers/task";
import { createTRPCRouter } from "~/server/api/trpc";

export const appRouter = createTRPCRouter({
  user: userRouter,
  task: taskRouter,
});

export type AppRouter = typeof appRouter;

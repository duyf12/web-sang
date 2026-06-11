import { sleep } from "~/lib/utils";
import { createTRPCRouter, procedure } from "~/server/api/trpc";

export const taskRouter = createTRPCRouter({
  getMany: procedure.query(async ({ ctx }) => {
    await sleep(1000);
    return null
  }),
});

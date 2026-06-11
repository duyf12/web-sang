import "server-only";

import { createTRPCNextLayout } from "~/@trpc/next-layout/server";
import { appRouter as router } from "~/server/api";
import { prisma } from "~/server/db";

export const api = createTRPCNextLayout({
  router,
  createContext() {
    return { prisma };
  },
});

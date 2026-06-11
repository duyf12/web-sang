import type { inferAsyncReturnType } from "@trpc/server";
import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { prisma } from "~/server/db";

export const createContext = (opts: FetchCreateContextFnOptions) => {
  return { prisma };
};

export type Context = inferAsyncReturnType<typeof createContext>;

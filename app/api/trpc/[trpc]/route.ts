import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter as router } from "~/server/api";
import { createContext } from "~/server/api/context";

const handler = (req: Request) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router,
    createContext,
  });
};

export { handler as GET, handler as POST };

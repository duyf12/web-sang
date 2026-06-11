"use client";

import { httpBatchLink } from "@trpc/client";
import {
  createHydrateClient,
  createTRPCNextBeta,
} from "~/@trpc/next-layout/client";
import { type AppRouter } from "~/server/api";

export const api = createTRPCNextBeta<AppRouter>({
  queryClientConfig: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchInterval: false,
        retry: false,
        cacheTime: Infinity,
        staleTime: Infinity,
      },
    },
  },
  links: [httpBatchLink({ url: `/api/trpc` })],
});

export const HydrateClient = createHydrateClient({});

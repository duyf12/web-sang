"use client";

import { ReactNode } from "react";
import { api } from "~/lib/api/client";

export function TrpcProvider({ children }: { children: ReactNode }) {
  return <api.Provider>{children}</api.Provider>;
}

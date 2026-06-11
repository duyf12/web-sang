/** @format */

import "~/styles/globals.css";

import { ReactNode } from "react";
import { ThemeProvider } from "~/components/theme-provider";
import { Toaster } from "~/components/ui/toaster";
import { NextAuthProvider } from "~/components/nextauth-provider";
import { AntdConfigProvider } from "~/components/antd-cfg-provider";
import { Confirmer } from "~/components/comfirm";
import { TrpcProvider } from "~/components/trpc-provider";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en" translate="no">
      <body cz-shortcut-listen="true">
        <ThemeProvider attribute="class" defaultTheme="light">
          <AntdConfigProvider>
            <TrpcProvider>
              <NextAuthProvider>{children}</NextAuthProvider>
              {/* <Toaster />
              <Confirmer /> */}
            </TrpcProvider>
          </AntdConfigProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

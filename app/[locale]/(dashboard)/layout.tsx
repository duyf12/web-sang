/** @format */

import { ReactNode } from "react";

import LocaleSwitcher from "~/components/locale-switcher";
import Logo from "~/components/logo";
import ModeToggle from "~/components/mode-toggle";
import Sidebar from "~/components/sidebar";
import UserNav from "~/components/user-nav";

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      {/* <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <Logo />
          <div className="ml-auto flex items-center space-x-4">
            <LocaleSwitcher />
            <ModeToggle />
            <UserNav />
          </div>
        </div>
      </div> */}
      <div className="w-full h-full">
        {/* <Sidebar /> */}
        <div className=" z-0">{children}</div>
      </div>
    </main>
  );
}

"use client";

import { LayoutGrid, Radio, Settings, User2Icon } from "lucide-react";
import Link from "next-intl/link";

import { HTMLAttributes } from "react";
import { Button } from "~/components/ui/button";

export default function Sidebar({ className }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start">
              <Link href="/users" className="flex w-full">
                <User2Icon className="mr-2 h-4 w-4" />
                Users
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Link href="/tasks" className="flex w-full">
                <LayoutGrid className="mr-2 h-4 w-4" />
                Tasks
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Radio className="mr-2 h-4 w-4" />
              Roles
            </Button>
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Library
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

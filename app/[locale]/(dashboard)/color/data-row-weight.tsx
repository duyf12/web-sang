/** @format */

"use client";

import { Row } from "@tanstack/react-table";
import { MoreHorizontal, Pen, Trash, Search } from "lucide-react";
import { test } from "node:test";

import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { confirm } from "~/components/comfirm";
import { toast } from "~/components/ui/use-toast";
import { api } from "~/lib/api/client";
import { useStore } from "~/app/[locale]/(dashboard)/color/store";

import { useTranslations } from "next-intl";

interface Props<TData> {
  row: Row<TData>;
}

export function DataRowWeight<TData>({ row }: Props<TData>) {
  const showEditForm = useStore((store) => store.showEditForm);

  const setIdThing = useStore((store) => store.setIdThing);
  const setDataShowEdit = useStore((store) => store.setDataShowEdit);

  return <div>Detailed</div>;
}

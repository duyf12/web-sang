"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { match } from "ts-pattern";
import { z } from "zod";
import { useStore } from "~/app/[locale]/(dashboard)/home/store";
import { SubmitButton } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "~/components/ui/sheet";
import { Skeleton } from "~/components/ui/skeleton";
import { toast } from "~/components/ui/use-toast";
import { api } from "~/lib/api/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import FormCreateLdap from "./ldap-form";
import FormCreateUser from "./user-form";

export function UserForm() {
  const open = useStore((store) => store.formOpen);
  const formMode = useStore((store) => store.formMode);
  const setOpen = useStore((store) => store.setFormOpen);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent position="right" size="sm">
        {match(formMode)
          .with("create", () => <FormCreateContent />)
          .with("edit", () => <FormEditContent />)
          .with("view", () => <FormViewContent />)
          .exhaustive()}
      </SheetContent>
    </Sheet>
  );
}

function FormViewContent() {
  const targetUserId = useStore((store) => store.formTargetUserId);
  const user = api.user.getById.useQuery(targetUserId);

  if (user.isFetching) {
    return <FormSkeleton />;
  }

  if (user.isError) {
    console.log(user.error.message);
    return null;
  }

  return (
    <>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            ds
          </Label>
          <Input
            id="id"
            className="col-span-3"
            disabled
            defaultValue={targetUserId}
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="email" className="text-right">
            d
          </Label>
          <Input
            id="email"
            className="col-span-3"
            disabled
            defaultValue={user.data?.email ? user.data.email : ""}
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            ds
          </Label>
          <Input
            id="name"
            className="col-span-3"
            disabled
            defaultValue={user.data?.name ? user.data.name : ""}
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="createdAt" className="text-right">
            ds
          </Label>
          <Input
            id="createdAt"
            className="col-span-3"
            disabled
            defaultValue={dayjs(user.data?.createdAt).format(
              "DD/MM/YYYY HH:mm:ss"
            )}
          />
        </div>
      </div>
    </>
  );
}

export function FormCreateContent() {
  return (
    <Tabs defaultValue="account">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="ldap">Account Ldap</TabsTrigger>
        <TabsTrigger value="account">Account User</TabsTrigger>
      </TabsList>
      <TabsContent value="ldap">
        <FormCreateLdap />
      </TabsContent>
      <TabsContent value="account">
        <FormCreateUser />
      </TabsContent>
    </Tabs>
  );
}

const EditFormSchema = z.object({
  name: z.string().min(2, "Tên không thể quá ngắn"),
});

type EditFormInput = z.infer<typeof EditFormSchema>;

function FormEditContent() {
  return <Skeleton className="h-4 w-[100px]" />;
}

function FormSkeleton() {
  return (
    <div className="flex items-center space-x-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[300px]" />
      </div>
    </div>
  );
}

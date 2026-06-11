"use client";

import { useTranslations } from "next-intl";
import { z } from "zod";
import { SubmitButton } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { api } from "~/lib/api/client";
import { toast } from "~/components/ui/use-toast";
import { useStore } from "~/app/[locale]/(dashboard)/home/store";

const CreateLdapFormSchema = z.object({
  name: z.string().min(2, "Tên không thể quá ngắn"),
  email: z.string().email(),
});

type CreateLdapFormInput = z.infer<typeof CreateLdapFormSchema>;

export default function FormCreateLdap() {
  const ctx = api.useContext();

  const { register, handleSubmit, formState } = useForm<CreateLdapFormInput>({
    resolver: zodResolver(CreateLdapFormSchema),
  });

  function submit(data: CreateLdapFormInput) {}

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Card>
        <CardHeader>
          <CardTitle className="text-center">
            {" "}
            {/* {t("users.form.createUser")} */}
          </CardTitle>
          <CardDescription className="text-center">
            {/* {t("users.form.title")} */}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            {/* <Label htmlFor="name">{t("users.form.name")}</Label> */}
            <Input {...register("name")} />
            {formState.errors.name && (
              <p className="pt-1 px-1 text-xs text-red-600">
                {formState.errors.name.message}
              </p>
            )}
          </div>
          <div className="space-y-1">
            {/* <Label htmlFor="email">{t("users.form.email")}</Label> */}
            <Input {...register("email")} />
            {formState.errors.email && (
              <p className="pt-1 px-1 text-xs text-red-600">
                {formState.errors.email.message}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton className="flex mt-10 w-full justify-center rounded-md bg-violet-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600">
            {/* {t("users.form.saveChange")} */}
          </SubmitButton>
        </CardFooter>
      </Card>
    </form>
  );
}

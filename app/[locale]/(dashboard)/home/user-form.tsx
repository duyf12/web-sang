"use client";

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
import { useTranslations } from "next-intl";
import { z } from "zod";
import { api } from "~/lib/api/client";
import { toast } from "~/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitButton } from "~/components/ui/button";
import { useForm } from "react-hook-form";
import { useStore } from "~/app/[locale]/(dashboard)/home/store";

const CreateFormSchema = z
  .object({
    name: z.string().min(2, "Tên không thể quá ngắn"),
    email: z.string().email(),
    password: z.string().min(8, "Mật khẩu của bạn quá yếu"),
    confirmPassword: z.string().min(8, "Mật khẩu của bạn quá yếu"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type CreateFormInput = z.infer<typeof CreateFormSchema>;

export default function FormCreateUser() {
  const ctx = api.useContext();

  const { register, handleSubmit, formState } = useForm<CreateFormInput>({
    resolver: zodResolver(CreateFormSchema),
  });

  function submit(data: CreateFormInput) {}
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Card>
        <CardHeader>
          <CardTitle className="text-center">
            {/* {t("users.form.createUser")} */}
          </CardTitle>
          <CardDescription className="text-center">
            {/* {t("users.form.title")} */}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="mt-2">
            <Label
              htmlFor="email"
              className="block text-sm leading-6 text-gray-900"
            >
              {/* {t("users.form.name")} */}
            </Label>
            <div className="mt-2">
              <Input {...register("name")} />
              {formState.errors.name && (
                <p className="pt-1 px-1 text-xs text-red-600">
                  {formState.errors.name.message}
                </p>
              )}
            </div>
          </div>
          <div className="mt-2">
            <Label
              htmlFor="username"
              className="block text-sm leading-6 text-gray-900"
            >
              {/* {t("users.form.email")} */}
            </Label>
            <div className="mt-2">
              <Input {...register("email")} />
              {formState.errors.email && (
                <p className="pt-1 px-1 text-xs text-red-600">
                  {formState.errors.email.message}
                </p>
              )}
            </div>

            <div className="mt-2">
              <Label
                htmlFor="name"
                className="block text-sm leading-6 text-gray-900"
              >
                {/* {t("users.form.password")} */}
              </Label>
              <div className="mt-2">
                <Input type="password" {...register("password")} />
                {formState.errors.password && (
                  <p className="pt-1 px-1 text-xs text-red-600">
                    {formState.errors.password.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-2">
              <Label
                htmlFor="name"
                className="block text-sm leading-6 text-gray-900"
              >
                {/* {t("users.form.confirmPassword")} */}
              </Label>
              <div className="mt-2">
                <Input type="password" {...register("confirmPassword")} />
                {formState.errors.confirmPassword && (
                  <p className="pt-1 px-1 text-xs text-red-600">
                    {formState.errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>
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

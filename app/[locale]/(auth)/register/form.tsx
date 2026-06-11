"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SubmitButton } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { toast } from "~/components/ui/use-toast";
import LocaleSwitcher from "~/components/locale-switcher";
import { api } from "~/lib/api/client";
import Link from "next-intl/link";
import { useRouter } from "next/navigation";

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

export default function RegisterForm() {
  return <div className="w-full">dssd</div>;
}

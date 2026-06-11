"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SubmitButton } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { toast } from "~/components/ui/use-toast";
import LocaleSwitcher from "~/components/locale-switcher";
import { Checkbox } from "~/components/ui/checkbox";
import { Icons } from "~/components/icons";
import ModeToggle from "~/components/mode-toggle";

const schema = z.object({
  email: z.string(),
  password: z.string().min(8, "Mật khẩu không hợp lệ"),
});

type FormData = z.infer<typeof schema>;

export default function SignInLdapForm() {
  return <div className="w-full">sd</div>;
}

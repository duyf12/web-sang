/** @format */

"use client";

import { useLocale } from "next-intl";
import { usePathname } from "next-intl/client";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const translations = ["en", "vn"];
  function onSelectChange(event: String) {
    router.replace(`/${event}${pathname}`);
  }

  return (
    <Select
      defaultValue={locale}
      onValueChange={(event) => onSelectChange(event)}
    >
      <SelectTrigger className="w-[120px]">
        <SelectValue defaultValue={locale} />
      </SelectTrigger>
      {/* <SelectContent>
        <SelectGroup>
          {translations.map((cur) => (
            <SelectItem key={cur} value={cur}>
              {t("locale", { locale: cur })}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent> */}
    </Select>
  );
}

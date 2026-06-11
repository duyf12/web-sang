"use client";

import { PlusCircleIcon, SearchIcon, TrashIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useStore } from "~/app/[locale]/(dashboard)/home/store";
import { confirm } from "~/components/comfirm";
import { Button } from "~/components/ui/button";
import { toast } from "~/components/ui/use-toast";
import { api } from "~/lib/api/client";

export default function UserHeading() {
  const ctx = api.useContext();
  const selectedUserIds = useStore((store) => store.selectedUserIds);
  const deleteMutation = api.user.deleteMany.useMutation();

  function showCreateForm() {
    useStore.getState().showCreateForm();
  }

  function deleteUsers() {
    confirm({
      title: "Bạn có chắc muốn xóa dữ liệu người dùng ?",
      description: `(${selectedUserIds.length}) người dùng đã được chọn`,
      onOk: async () => {
        await deleteMutation.mutateAsync(selectedUserIds as string[]);
        await ctx.user.getMany.invalidate();
        useStore.getState().resetSelectedUserIds();
        toast({
          title: "Thao tác thành công.",
          description: "Đã xóa dữ liệu người dùng",
        });
      },
    });
  }

  return (
    <div className="w-full flex justify-between mb-4">
      <div>
        {selectedUserIds.length > 0 && (
          <Button variant="destructive" onClick={deleteUsers}>
            <TrashIcon size={18} className="mr-2" />
            Delete ({selectedUserIds.length})
          </Button>
        )}

        <Button className="ml-2" variant="outline">
          {/* <SearchIcon size={18} className="mr-2" /> {t("filter")} */}
        </Button>

        <Button onClick={showCreateForm} className="ml-2">
          {/* <PlusCircleIcon size={18} className="mr-2" /> {t("addUser")} */}
        </Button>
      </div>
    </div>
  );
}

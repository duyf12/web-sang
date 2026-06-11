/** @format */

"use client";

import dynamic from "next/dynamic";
import { Key } from "react";
import { useStore } from "~/app/[locale]/(dashboard)/home/store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { InspectIcon } from "lucide-react";
import { api } from "~/lib/api/client";
import { confirm } from "~/components/comfirm";
import { useTranslations } from "next-intl";

const Table = dynamic(() => import("antd/es/table"), { ssr: false });

export default function UserTable() {
  const current = useStore((store) => store.page);
  const pageSize = useStore((store) => store.pageSize);
  const selectedUserIds = useStore((store) => store.selectedUserIds);
  const result = api.user.getMany.useQuery({ current, pageSize });

  const columns = [
    {
      title: `d`,
      dataIndex: "name",
      key: "name",
    },
    {
      title: `s`,
      dataIndex: "email",
      key: "email",
    },
    {
      title: `d`,
      width: 130,
      render: (_: any, record: any) => <Actions id={record.id} />,
    },
  ];

  return (
    <Table
      bordered
      rowKey="id"
      loading={result.isFetching}
      dataSource={result.data?.users}
      columns={columns}
      rowSelection={{
        selectedRowKeys: selectedUserIds,
        onChange(selectedRowKeys) {
          useStore.getState().setSelectedUserIds(selectedRowKeys);
        },
      }}
      pagination={{
        current,
        pageSize,
        total: result.data?.total,
        onChange(page, pageSize) {
          useStore.getState().setPagination(page, pageSize);
        },
      }}
    />
  );
}

function Actions({ id }: { id: Key }) {
  const ctx = api.useContext();
  const userDeletion = api.user.deleteById.useMutation();

  function showViewForm() {
    useStore.getState().showViewForm(id as string);
  }

  function showEditForm() {
    useStore.getState().showEditForm(id as string);
  }

  function onDelete() {}

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-full text-center">
        <InspectIcon className="cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel></DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={showViewForm}>
          {/* {t("table.detailTitle")} */}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={showEditForm}>
          {/* {t("table.edit")} */}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onDelete}>
          {/* {t("table.delete")} */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

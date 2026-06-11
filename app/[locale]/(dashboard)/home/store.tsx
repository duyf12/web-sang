import { Key } from "react";
import { create } from "zustand";

interface State {
  formMode: "edit" | "view" | "create";
  formOpen: boolean;
  formTargetUserId: string;
  selectedUserIds: Key[];
  page: number;
  pageSize: number;
  setPagination: (page: number, pageSize: number) => void;
  setSelectedUserIds: (selectedUserIds: Key[]) => void;
  resetSelectedUserIds: () => void;
  setFormOpen: (formOpen: boolean) => void;
  showEditForm: (userId: string) => void;
  showViewForm: (userId: string) => void;
  showCreateForm: () => void;
}

export const useStore = create<State>((set) => ({
  formMode: "edit",
  formOpen: false,
  selectedUserIds: [],
  formTargetUserId: "",
  page: 1,
  pageSize: 10,
  showCreateForm() {
    set({ formMode: "create", formOpen: true, formTargetUserId: "" });
  },
  showEditForm(userId: string) {
    set({ formMode: "edit", formOpen: true, formTargetUserId: userId });
  },
  showViewForm(userId: string) {
    set({ formMode: "view", formOpen: true, formTargetUserId: userId });
  },
  setPagination(page, pageSize) {
    set({ page, pageSize });
  },
  setSelectedUserIds(selectedUserIds) {
    set({ selectedUserIds });
  },
  resetSelectedUserIds() {
    set({ selectedUserIds: [] });
  },
  setFormOpen(formOpen) {
    set({ formOpen });
  },
}));

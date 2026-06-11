/** @format */

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
  showEditForm: () => void;
  showViewForm: (userId: string) => void;
  showCreateForm: () => void;

  filterVisible: boolean;
  setVisibleFilter: (visible: boolean) => void;
  filterFullName: string;

  checkFilter: boolean;
  setCheckFilter: (dateFrom: boolean) => void;
  dataListFilter: any[];
  setDataListFilter: (dataListFilter: any[]) => void;

  dataShowEdit: any;
  setDataShowEdit: (dataShowEdit: {}) => void;
  idThing: string;

  setIdThing: (idThing: string) => void;

  checkMetadata: boolean;
  setCheckMetadata: (checkMetadata: boolean) => void;
  //

  itemChoose: any;
  setItemChoose: (itemChoose: any) => void;
  resetItemChoose: () => void;
  dataListColor: any[];
  setDataListColor: (dataListColor: any[]) => void;
  valueWeight: number;
  setValueWeight: (valueWeight: number) => void;

  stringFiterConnect: string;
  setStringFiterConnect: (stringFiterConnect: string) => void;

  inputCarBrand: string;
  setInputCarBrand: (inputCarBrand: string) => void;
}

export const useStore = create<State>((set) => ({
  formMode: "edit",
  formOpen: false,
  selectedUserIds: [],
  formTargetUserId: "",
  page: 1,
  valueWeight: 100,
  pageSize: 10,
  dataListFilter: [],
  dataListColor: [],
  itemChoose: {},
  filterFullName: "",
  idThing: "",
  filterVisible: false,
  checkFilter: false,

  checkMetadata: false,
  dataShowEdit: {},
  stringFiterConnect: "",
  inputCarBrand: "All",

  setInputCarBrand(data) {
    set({ inputCarBrand: data });
  },
  setValueWeight(data) {
    set({ valueWeight: data });
  },
  setDataListColor(data) {
    set({ dataListColor: data });
  },
  setItemChoose(data) {
    set({ itemChoose: data });
  },
  resetItemChoose() {
    set({ itemChoose: {} });
  },

  setStringFiterConnect(data) {
    set({ stringFiterConnect: data });
  },
  setCheckMetadata(data) {
    set({ checkMetadata: data });
  },
  setIdThing(data) {
    set({ idThing: data });
  },
  setDataShowEdit(data) {
    set({ dataShowEdit: data });
  },
  setDataListFilter(data) {
    set({ dataListFilter: data });
  },
  setCheckFilter(data) {
    set({ checkFilter: data });
  },

  showCreateForm() {
    set({ formMode: "create", formOpen: true, formTargetUserId: "" });
  },

  showEditForm() {
    set({ formMode: "edit", formOpen: true, formTargetUserId: "" });
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

  setVisibleFilter(data) {
    set({ filterVisible: data });
  },
}));

/** @format */

"use client";
import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";

import { useStore } from "~/app/[locale]/(dashboard)/color/store";
const App = () => {
  const setDataListColor = useStore((store) => store.setDataListColor);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/icon/code-color-sang.xlsx"); // Thay 'data.xlsx' bằng đường dẫn tương đối đến file Excel của bạn
        const blob = await response.blob();
        const reader = new FileReader();

        reader.onload = (event: any) => {
          const binaryString = event.target.result;
          const workbook = XLSX.read(binaryString, { type: "binary" });

          const sheetName = workbook.SheetNames[0]; // Giả sử chỉ có một sheet
          const sheet = workbook.Sheets[sheetName];
          const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

          console.log("datadatadatadatadatadatadata= ", data);

          setDataListColor(data);
        };

        reader.readAsBinaryString(blob);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <div></div>;
};

export default App;

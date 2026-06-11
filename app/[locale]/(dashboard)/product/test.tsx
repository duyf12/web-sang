/** @format */

import { read, utils, writeFile } from "xlsx";

interface President {
  stt: string;
  colorCode: string;
  Brand: string;
  year: string;
  unit: string;
  BrandNumber: string;
  carBrand: string;
  ReciprPictures: string;
}
async function changeDisplayName({}) {
  const f = await fetch(
    "https://docs.google.com/spreadsheets/d/1yyeFWCh_7BYmIiWmkGQJkLYTranL-EQ46l2Li4DYLHk/edit?usp=sharing"
  );
  const ab = await f.arrayBuffer();

  /* parse */
  const wb = read(ab);

  /* generate array of presidents from the first worksheet */
  const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
  const data: President[] = utils.sheet_to_json<President>(ws); // generate objects

  /* update state */
  console.log("data= ", data);

  return data;
}
export default Object.freeze({
  changeDisplayName,
});

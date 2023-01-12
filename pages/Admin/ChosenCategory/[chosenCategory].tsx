import { useRouter } from "next/router";
import { useLayoutEffect } from "react";
import books from "../../../public/json/books.json";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

export default function ChosenCategory() {
  const router = useRouter();
  const { chosenCategory } = router.query;

  const titles: string[] = [];

  books.forEach((book) => {
    if ( book.categories.indexOf(chosenCategory) > -1) {
      titles.push(book.title);
    }
  });
  console.log(titles);

  const columns: GridColDef[] = [
    { field: "col1", headerName: GridColDef, width: 400 },
  ];


  const rows: GridRowsProp = titles.map((title, index) => {
    return {id: index + 1, col1: title}
  });

  const cellClick = (e:any) => {
    router.push(`/BookPage/${e.value}`)
  }

  return (
    <>
      <h2>{chosenCategory}</h2>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
        style={{cursor: "pointer"}}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          onCellClick={cellClick}
        />
      </Box>
      
    </>
  );
}

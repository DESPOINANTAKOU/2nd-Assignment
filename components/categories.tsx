import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import books from "../public/json/books.json";
import { useRouter } from "next/router";
import React from "react";

export default function Categories(props:any) {
  const router = useRouter();

  //construction of columns
  const columns: GridColDef[] = [
    { field: "col1", headerName: "Categories", width: 600 },
  ];

  //function that creates the rows
  const getCategories = () => {
    //it is the entity that we will populate
    const ourCategories: any = new Set();

    //iterations so that we take each and every category and populate the Set() entity. So here we build the Set() entity ourCategories - also
    //if there is an empty category we put the "empty" string in the place of the category expected so that there is no empty category name!
    books.forEach((book, _index) => {
      book.categories.forEach((category) => {
        ourCategories.add(category || "empty");
      });
    });

    const result = Array.from(ourCategories).map((category, index) => {
      return { id: index + 1, col1: category };
    });

    return result;
  };

  //getCategories() must have a returning value so that it can populate the rows!
  const rows: GridRowsProp = getCategories();

  //what happens when we click a cell that has a specific category
  function cellClick(e: any) {
    console.log(e.value);
    router.push(`/Admin/ChosenCategory/${e.value}`);
  }

  // const logout = (_event: any) => {
  //   setLogged(false);
  // };

  return (
    //parent component
    <React.Fragment>
      {/* container of the DataGrid */}
      <Box sx={{ height: 400, width: "80%", margin: "auto" }}>
        {/* container of the button */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {" "}
          <button
            style={{
              cursor: "pointer",
              marginBottom: "2rem",
              marginTop: "1rem",
              fontSize: "1rem",
              border: "none",
              padding: "0.8rem",
              borderRadius: "7px",
              backgroundColor: "lightblue",
            }}
            onClick={(_event: any) => {props.setLogged(false)}}
          >
            Log Out
          </button>
        </div>
        <DataGrid
          style={{ cursor: "pointer" }}
          rows={rows}
          columns={columns}
          pageSize={5}
          //it throws a warning if not 5 items per page
          rowsPerPageOptions={[5]}
          onCellClick={cellClick}
        />
      </Box>
    </React.Fragment>
  );
}

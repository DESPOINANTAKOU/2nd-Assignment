import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import Box from '@mui/material/Box'; 
import books from "../../public/json/books.json";

export default function Categories() {
  const columns: GridColDef[] = [
    { field: "col1", headerName: "Categories", width: 400 },
  ];



  const  getCategories  = () => {
    const newCategories: any  =  new Set();
    books.forEach((book, index) => {
      book.categories.forEach((category) => { newCategories.add(category || "empty") })
    });
  const result = Array.from(newCategories).map((category, index) => {
    return {id: index + 1, col1: category}
  });
  return result;
  };

const rows:GridRowsProp = getCategories();


  
  
  return (
    <>
       <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
      </Box>
    </>
  );
}

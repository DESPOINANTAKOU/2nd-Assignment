import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import books from "../../public/json/books.json";
import { useRouter } from 'next/router';


export default function Categories() {
  const router = useRouter();
  
  //construction of columns
  const columns: GridColDef[] = [
    { field: "col1", headerName: "Categories", width: 400 },
  ];

  //function that creates the rows
  const getCategories = () => {
    const newCategories: any = new Set();
    books.forEach((book, index) => {
      book.categories.forEach((category) => {
        newCategories.add(category || "empty");
      });
    });
    const result = Array.from(newCategories).map((category, index) => {
      return { id: index + 1, col1: category };
    });
    return result;
  };

  const rows: GridRowsProp = getCategories();

  function cellClick(e:any) {
    console.log(e.value);
    router.push(`/Admin/ChosenCategory/${e.value}`);
  }

  return (
    <>
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

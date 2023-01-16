import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import books from "../public/json/books.json";
import { useRouter } from "next/router";

export default function Categories({ setLogged }) {
  const router = useRouter();

  //construction of columns
  const columns: GridColDef[] = [
    {field: "col1", headerName: "Categories", width: 100 },
  ];

  //function that creates the rows
  const getCategories = () => {
    const ourCategories: any = new Set();
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

  const rows: GridRowsProp = getCategories();

  function cellClick(e: any) {
    console.log(e.value);
    router.push(`/Admin/ChosenCategory/${e.value}`);
  }

  const logout = (_evt: any) => {
    setLogged(false);
  };

  return (
    <>
      <Box sx={{ height: 400, width: "80%", margin: "auto" }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {" "}
          <button
            onClick={logout}
            style={{
              cursor: "pointer",
              marginBottom: "2rem",
              marginTop: "1rem",
              fontSize: "1rem",
              border: "none",
              padding: "0.8rem",
              backgroundColor: "lightblue",
            }}
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
    </>
  );
}

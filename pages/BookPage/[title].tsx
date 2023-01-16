import { useRouter } from "next/router";
import books from "../../public/json/books.json";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BookPage() {
  const router = useRouter();  
  const { title } = router.query;

  const result = books.filter((book) => {
    return book.title === title;
  });

  console.log(result);

  const selectedBook = result[0];
  if (selectedBook) {
    return (
      <>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          {Object.keys(selectedBook).map((key, index) => {
            let showValue = selectedBook[key];
            if (Array.isArray(selectedBook[key]))
              showValue = selectedBook[key].toString();
            else if (typeof selectedBook[key] === "object")
              showValue = selectedBook[key]["$date"]
            return (
              <TextField
                key={index}
                id="outlined-multiline-flexible"
                label={key}
                defaultValue={showValue}
                InputProps={{
                  readOnly: true,
                }}
              />
            );
          })}
        </Box>
      </>
    );
  } else {
    return (
      <>
        <div>Book not found!</div>
      </>
    );
  }
}

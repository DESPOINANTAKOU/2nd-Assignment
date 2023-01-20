import { useRouter } from "next/router";
import books from "../../public/json/books.json";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";

export default function BookPage() {
  const router = useRouter();
  //part of the Next router from where we can get our title
  const bookTitle = router.query.title;

  interface SelectedBook {
    title: string;
    isbn?: string;
    pageCount: number;
    publishedDate?: {
      $date: string;
    };
    thumbnailUrl?: string;
    shortDescription?: string;
    longDescription?: string;
    status: string;
    authors: string[];
    categories: string[];
  }

  //we have the dynamic value of the title because of the Next router and we basically check this value with the title inside the json file so that it can
  //be matched and return us the data for the specific book!
  const result = books.filter((book) => {
    if (book.title === bookTitle) {
      return book;
    }
    console.log(book);
  });

  console.log(result);

  const selectedBook: SelectedBook = result[0];

  if (result) {
    return (
      <React.Fragment>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          {Object.keys(result).map((key: string, index: number) => {
            let bookInfo: { [key: string]: any } = result;
            console.log(bookInfo);
           if (Array.isArray(selectedBook[key]))
           showValue = selectedBook[key].toString();
            else if (typeof selectedBook[key] === "object")
            showValue = selectedBook[key]["$date"];
            return (
              <TextField
                key={index}
                id="outlined-multiline-flexible"
                label={key}
                defaultValue={bookInfo}
                InputProps={{
                  readOnly: true,
                }}
              />
            );
          })}
          
        </Box>
      </React.Fragment>
    );
  } else {
    return (
      <>
        <div>Book not found!</div>
      </>
    );
  }
}

import books from "../json/books.json";
import React, { useEffect, useState } from "react";

export default function CategoriesListing() {
  const [bookCategories, setBookCategories] = useState([]);

  //making a function to separate each object of the array books using forEach() array method

  let categories: any = [];
  function categoriesListing() {
    books.forEach((book) => {
      console.log(book);
      categories += book.categories;
    });
    console.log(categories);
    const newCategories = categories.split(",");
    console.log(newCategories);
    setBookCategories(newCategories);
    bookCategories.map((bookCategory, index) => {
      (<div key={index}>{bookCategory}</div>)
  });
  }
  
  useEffect(() => {
    categoriesListing();
  },[]);

  return (
    <>
      <h1>Book Categories Page</h1>
      {bookCategories}
    </>
  );
}

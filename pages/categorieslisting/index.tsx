import books from "../json/books.json";
import React, { useEffect, useState } from "react";
import categoriesCss from '../../styles/categorieslisting.module.css';

export default function CategoriesListing() {
  const [bookCategories, setBookCategories] = useState([]);

  let categories: any = [];
  //in this function we loop the json data through forEach() method and in each loop we add the categories of each object of
  //the books json data to the categories variable. Then we have a string that we split it at the (,)  and  convert it to an array
  //through the split method. The array is called newCategories and we store it to the state.Last but not least we map it so
  //that we can render it through JSX in the UI.
  useEffect(() => {
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
      <div className={categoriesCss.bookDivs} key={index}>{bookCategory}</div>;
    });
  }
  categoriesListing();
}, []);


  return (
    <>
      <h1>Book Categories Page</h1>
      <div className={categoriesCss.parentOfBookDivs}>{bookCategories}</div>
    </>
  );
}

import  books from "../../public/json/books.json";
import React, { useEffect, useState } from "react";
import categoriesCss from "../../styles/categorieslisting.module.css";

export default function CategoriesListing() {
  const [jsonData, setJsonData] = useState<any[]>(books);
  let [categories, setCategories] = useState<string[]>([]);
 
  //display in the console of the json's data that we have stored inside the jsonData state
  useEffect(() => {
    //setting localy in the jsonData state of this component all the json data```
    setJsonData(books);
    console.log("jsonData");
    console.log(jsonData);
  }, []);

  //fetching only the categories property
  useEffect(() => {
    //function with which we fetch the categories data only.
    function categoriesListing() {
      //if books exists as an entity do the mapping
      let bookCategories: any[] = [];
      jsonData &&
      jsonData.forEach((book: any) => {
          //before fetching the categories property from each  book object we check through an if that this property is not
          // null is not undefined and it's length is bigger that 0
          if (
            book.categories !== null &&
            book.categories !== undefined &&
            book.categories.length > 0
          ) {
            bookCategories?.push(book?.categories);
          }
        });
      setCategories(bookCategories);
      console.log("bookCategories");
    console.log(bookCategories);
    }

    categoriesListing();
    console.log(categories);
    categories.toString().split(",");
    console.log("splittedcategories");
    console.log(categories);
  }, []);

  return (
    <>
      <h1>Book Categories Page</h1>
      {categories && 
        categories?.map((bookCategory, index) => {
          <div className={categoriesCss.bookDivs} key={index}>
            {bookCategory} 
          </div>;
        })}
    </>
  );
}

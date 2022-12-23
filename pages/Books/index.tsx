import  books from "../../public/json/books.json";
import React, { useEffect, useState } from "react";
import categoriesCss from "../../styles/categorieslisting.module.css";

export default function CategoriesListing() {
  const [jsonData, setJsonData] = useState<any>(books);
  const [categories, setCategories] = useState<string[]>([]);

  interface IBooksJson {
    authors: string[];
    categories: string[];
    isbn: string;
    longDescription: string;
    pageCount: number;
    publishedDate: {};
    shortDescription: string;
    status: string;
    thumbnailUrl: string;
    title: string;
  }

  useEffect(() => {
    // setting a state to take the json's data.
    setJsonData(books);
    console.log("jsonData");
    console.log(jsonData);
    let categories:string[] = [];
    //looping through the jsonData array  so that we can take the categories property
    for (let i = 0; i< jsonData.length; i++){
       categories = categories?.concat(jsonData[i].categories);
    }
   console.log(categories)
   setCategories(categories);
  }, []);

  return (
    <>
      <h1>Book Categories Page</h1>
      <div>{categories}</div>
    </>
  );
}

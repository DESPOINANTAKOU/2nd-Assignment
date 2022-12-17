import React from "react";
import books from "../json/books.json";

export default function  CategoriesListing() {

function categoriesListing(){
   books.forEach((book) => {
    console.log(book);
   });
};

categoriesListing();


    return( <>

    </>);
}
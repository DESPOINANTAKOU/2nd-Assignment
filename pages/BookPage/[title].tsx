import { useRouter } from "next/router";
import books from "../../public/json/books.json";

export default function BookPage() {
  const router = useRouter();
  const { title } = router.query;


 const result = books.filter((book)=>{ return book.title === title});
 

 console.log(result);

 const selectedBook = result[0];
 if(selectedBook) {
  return <><div>{selectedBook?.title}</div></>;
 } else {
  return <><div>Book not found!</div></>
 }
  
}

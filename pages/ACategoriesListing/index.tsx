import books from "../../public/json/books.json";
import styles from "../../styles/ACategoriesListing.module.css";

export default function ACategoriesListing() {
  // console.log(Array.isArray(books));

  interface Book {
    title: string;
    isbn: string;
    pageCount: number;
    publishedDate: {};
    thumbnailUrl: string;
    shortDescription: string;
    longDescription: string;
    status: string;
    authors: string[];
    categories: string[];
  }

  interface Categories {
    [index: string]: string[];
  }

  const ourCategories: Categories = {};

  books.forEach((book) => {
    book.categories.forEach((categoryName) => {
      //it takes also the case of the undefined and also null
      if (ourCategories[categoryName] == null) {
        //we build ourCategories array with the categoryName items from the json
        ourCategories[categoryName] = [];
      }
      //we choose string data structure cause it will not create duplicates in the categories
      ourCategories[categoryName].push(book.title);
      console.log(ourCategories[categoryName]);
      console.log(book.title);
    });
    console.log(book.isbn);
  });

  return (
    <>
      <h1>List of Book Categories</h1>
      
      <div className={styles.parentDiv}>
        {Object.keys(ourCategories).sort().map((category, index) => (
          <div key={index} className={styles.categories}>
            <span id={styles.category}>{category}</span>{" "}
            <span>Amount of Books: {ourCategories[category].length}</span>
            <ul style={{ paddingLeft: "0" }}>
              {ourCategories[category].map((bookTitle, index) => {
                return (
                  <li
                    className={styles.li}
                    style={{ marginBottom: ".5rem" }}
                    key={index}
                  >
                    <a href={`/BookPage/${(bookTitle)}`}>
                      {bookTitle}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

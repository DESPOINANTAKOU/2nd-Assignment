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

  const categories: Categories = {};

  books.forEach((book) => {
    book.categories.forEach((categoryName) => {
      if (categories[categoryName] == null) {
        categories[categoryName] = [];
      }
      categories[categoryName].push(book.title);
    });
  });

  console.log(categories);

  return (
    <>
    <h1>List of Book Categories</h1>
      <div className={styles.parentDiv}>
        {Object.keys(categories).map((category, index) => (
          <div key={index} className={styles.categories}>
            <span id={styles.category}>{category}</span>{" "}
            <span>Amount of Books: {categories[category].length}</span>
          </div>
        ))}
      </div>
    </>
  );
}

import { useSelector } from "react-redux";

const BookList = () => {
  const books = useSelector((state) => state.booksR.books);
  const handleDelete =(id) => {
    console.log(id)
  }
  return (
    <div>
      <h2>List of books</h2>
      { books && books.length > 0 ? <ul>
        {
          books.map((book) => {
            return (<li key={book.id}>
              {book.title} by {book.author} -${book.price} -{book.quantity}
              <button onClick={()=>handleDelete(book.id)}>delete</button>
            </li>)
          })
        }
      </ul> : (<>No books exists</>) } 
    </div>
  );
};

export default BookList;

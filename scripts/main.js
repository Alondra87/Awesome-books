import initialBooks from './data/books.data.js';
import genNewIdForElem from './utils/id.utils.js';
import {
  getInputAuthorValue,
  getInputTitleValue,
  addEventHandlerToAddForm,
} from './views/add-book-form.view.js';
import { addBook, removeBookFromScreen, renderBooksList } from './views/books.view.js';

let books = [...initialBooks];

const removeBook = (bookId) => {
  removeBookFromScreen(bookId);
  books = books.filter((book) => book.id !== bookId);
};

renderBooksList('books', books, removeBook);
addEventHandlerToAddForm((event) => {
  event.preventDefault();
  const title = getInputTitleValue();
  const author = getInputAuthorValue();
  const newBook = {
    id: genNewIdForElem(books),
    title,
    author,
  };
  addBook(newBook, removeBook);
  books.push(newBook);
});

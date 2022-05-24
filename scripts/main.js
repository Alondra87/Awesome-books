import initialBooks from './data/books.data.js';
import { genNewIdForElem, getIdsFromElemsArray } from './utils/id.utils.js';
import {
  getInputAuthorValue,
  getInputTitleValue,
  addEventHandlerToAddForm,
} from './views/add-book-form.view.js';
import {
  addBook,
  removeBookFromScreen,
  renderBooksList,
} from './views/books.view.js';

const storeBooksData = (books) => {
  localStorage.setItem('books', JSON.stringify(books));
};

const getBooksData = () => {
  const books = localStorage.getItem('books');
  if (books) {
    return JSON.parse(books);
  }
  return [];
};

const booksStored = getBooksData();
let books = booksStored.length > 0
  ? [
    ...initialBooks,
    ...booksStored.filter(
      ({ id }) => !getIdsFromElemsArray(initialBooks).includes(id),
    ),
  ]
  : initialBooks;

const removeBook = (bookId) => {
  removeBookFromScreen(bookId);
  books = books.filter((book) => book.id !== bookId);
  storeBooksData(books);
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
  storeBooksData(books);
});

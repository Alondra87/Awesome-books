import books from './data/books.js';
import {
  getInputAuthorValue,
  getInputTitleValue,
  addEventHandlerToAddForm,
} from './views/add-book-form.view.js';
import { addBook, renderBooksList } from './views/books.view.js';

renderBooksList('books', books);
addEventHandlerToAddForm((event) => {
  event.preventDefault();
  const title = getInputTitleValue();
  const author = getInputAuthorValue();
  const newBook = {
    title,
    author,
  };
  addBook(newBook);
  books.push(newBook);
});

/* eslint-disable no-unused-vars */
import createElem from '../utils/createElem.utils.js';

const BOOKS_LIST_ID = 'books-list';
const BOOK_BASE_ID = 'book';

export function createBookElem({ id, title, author }, removeBookCallback) {
  const bookItem = document.createElement('li');
  bookItem.id = `${BOOK_BASE_ID}-${id}`;
  bookItem.innerHTML = `
    <h2>${title}</h2>
    <p>${author}</p>
  `;
  const removeBtn = createElem({
    tag: 'button',
    text: 'Remove',
  });
  removeBtn.type = 'button';
  removeBtn.addEventListener('click', () => { removeBookCallback(id); });
  bookItem.appendChild(removeBtn);
  return bookItem;
}

export function renderBooksList(booksSectionId, books, removeBookCallback) {
  const booksSection = document.getElementById(booksSectionId);
  const booksListElem = document.createElement('ul');
  booksListElem.id = BOOKS_LIST_ID;
  books.forEach((book) => {
    const bookElem = createBookElem(book, removeBookCallback);
    booksListElem.appendChild(bookElem);
  });
  booksSection.appendChild(booksListElem);
}

export function addBook(book, removeBookCallback) {
  const bookElem = createBookElem(book, removeBookCallback);
  const booksListElem = document.getElementById(BOOKS_LIST_ID);

  booksListElem.appendChild(bookElem);
}

export function removeBookFromScreen(bookId) {
  const bookElem = document.getElementById(`${BOOK_BASE_ID}-${bookId}`);
  bookElem.remove();
}

const BOOKS_LIST_ID = 'books-list';

export function genBookMarkUp(title, author) {
  const bookMarkUp = `
    <div>
      <h2>${title}</h2>
      <p>${author}</p>
      <button type="button">Remove</button>
    </div>`;
  return bookMarkUp;
}

export function renderBooksList(booksListId, books) {
  const booksListSection = document.getElementById(booksListId);
  const booksListElem = document.createElement('ul');
  booksListElem.id = BOOKS_LIST_ID;
  const booksListMarkup = books.reduce(
    (acc, { title, author }) => `${acc}<li>${genBookMarkUp(title, author)}</li>`,
    '',
  );
  booksListElem.innerHTML = booksListMarkup;
  booksListSection.appendChild(booksListElem);
}

export function addBook({ title, author }) {
  const bookMarkup = genBookMarkUp(title, author);
  const booksListElem = document.getElementById(BOOKS_LIST_ID);

  booksListElem.insertAdjacentHTML('beforeend', `<li>${bookMarkup}</li>`);
}

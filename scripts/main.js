import books from "./data/books.js";
function genBookMarkUp(title, author){
const bookMarkUp = `
<div>
<h2>${title}</h2>
<p>${author}</p>
<button type="button">Remove</button>
</div>`;
return bookMarkUp;
}

function renderBooksList(booksListId, books){
const booksListSection = document.getElementById(booksListId);
const booksList = document.createElement('ul');
const booksMarkup = books.reduce((acc, {title, author}) => `${acc}${genBookMarkUp(title, author)}`, '');
booksList.innerHTML = booksMarkup;
booksListSection.appendChild(booksList);

}

renderBooksList('books-list', books);


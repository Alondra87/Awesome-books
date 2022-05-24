const ADD_BOOK_FORM_ID = 'add-book-form';

export function addEventHandlerToAddForm(callback) {
  const addForm = document.getElementById(ADD_BOOK_FORM_ID);
  addForm.addEventListener('submit', callback);
}

export function getInputTitleValue() {
  const addForm = document.getElementById(ADD_BOOK_FORM_ID);
  return addForm.elements.title.value;
}

export function getInputAuthorValue() {
  const addForm = document.getElementById(ADD_BOOK_FORM_ID);
  return addForm.elements.author.value;
}

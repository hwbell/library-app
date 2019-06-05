
// this will see if a book is already added to the existing list
const checkForBookInList = (thisBook, list) => {
  list.forEach(book => {
    if (book.id == thisBook.id) {
      return true;
    }
  });
  return false;
}

module.exports = {
  checkForBookInList
}
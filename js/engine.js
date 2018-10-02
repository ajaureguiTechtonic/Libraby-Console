function Library() {
  this.bookShelf = new Array();
};

Library.prototype.addBook = function(book) {
  console.log('hey');
  console.log(this);

};


Library.prototype.removeBookByTitle = function(title) {

};

Library.prototype.removeBooksByAuthor = function(authorName) {

};

Library.prototype.getRandomBook = function() {

};

Library.prototype.getBooksByTitle = function(title) {

};

Library.prototype.getBooksByAuthor = function(authorName) {

};

Library.prototype.addBooks = function(aBooks) {

};

Library.prototype.getAuthors = function() {

};

Library.prototype.getRandomAuthorName = function() {

};

document.addEventListener('DOMContentLoaded', function(e) {
  window.gLibrary = new Library();
})

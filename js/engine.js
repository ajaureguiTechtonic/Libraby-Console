function Library() {
  this.bookShelf = new Array();
};

var testBook1 = new Book('the great','skippy-sea', 599, 2014);
var testBook2 = new Book('the poor','jenny-jones', 608, 2018);
var testBook3 = new Book('marvelous mag pie','randy-rum', 566, 2012);
var testBook4 = new Book('sand dunes','sir-mix-a-lot', 499, 205);
var testBook5 = new Book('101 jokes','smarty party', 101, 2009);
var allBooks = [testBook1, testBook2, testBook3, testBook4, testBook5];

Library.prototype.addBook = function(oBook) {
  for(var i = 0; i < this.bookShelf.length; i++) {
    if(this.bookShelf[i].title === oBook.title) {
      return false
    }
  }
  this.bookShelf.push(oBook);
  return true;
};

Library.prototype.removeBookByTitle = function(title) {
  for(var i = 0; i < this.bookShelf.length; i++) {
    if(this.bookShelf[i].title === title) {
      var bookToRemove = this.bookShelf[i];
      this.bookShelf.splice(this.bookShelf.indexOf(bookToRemove), 1);
      return true
    }
  }
  return false;
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
  addAllBooks(allBooks);
})

function addAllBooks(books) {
  books.forEach(function(e) {
    (gLibrary.bookShelf).push(e)
  })
}

// setTimeout(function(){ console.log(gLibrary.bookShelf);}, 500);

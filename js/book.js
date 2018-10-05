function Book(title, author, numPages, pubDate) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.pubDate = pubDate;
};

//potential problem with the \\ would be if someone entered a valid entry that equivalates to 'falsey' value such as 0 pages for a book, in this circumstance no value entered should be a falsey value. Alternative solution would be to use 'if' conditionals.

//need a check on titles to make sure that title is not overriden to a title that already exists
Book.prototype.editBook = function(oBook) {
  this.title = oBook.title || this.title;
  this.author = oBook.author || this.author;
  this.numPages = oBook.numPages || this.numPages;
  this.pubDate = oBook.pubDate || this.pubDate;
  return this;
};

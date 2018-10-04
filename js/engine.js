function Library() {
  this.bookShelf = new Array();
};

var testBook1 = new Book('the great','skippy-sea', 599, 2014);
var testBook2 = new Book('the poor','jenny-jones', 608, 2018);
var testBook3 = new Book('marvelous mag pie','randy-rum', 566, 2012);
var testBook4 = new Book('sand dunes','sir-mix-a-lot', 499, 205);
var testBook5 = new Book('101 jokes','smarty party', 101, 2009);
var testBook6 = new Book('a penny for your thoughts','randy-rum', 256, 2010);
var testBook7 = new Book('my favorite things', 'oprah', 300, 2018);
var testBook8 = new Book('O the autobiography', 'oprah', 345, 2016);
var testBook9 = new Book('my girl', 'annonymous', 48, 2017);
var allBooks = [testBook1, testBook2, testBook3, testBook4, testBook5, testBook6, testBook7, testBook8];
var allBooks2 = [testBook2, testBook3, testBook6];
var testBooksArray3 = [new Book('mobey dick', 'h-m', 790, 2003), new Book('it', 's-k', 345, 2001)];

Library.prototype.addBook = function(oBook) {
  for(var i = 0; i < this.bookShelf.length; i++) {
    if(this.bookShelf[i].title === oBook.title) {
      return false
    }
  }
  this.bookShelf.push(oBook);
  this.setLocalStorage();
  return true;
};

Library.prototype.removeBookByTitle = function(title) {
  for(var i = 0; i < this.bookShelf.length; i++) {
    if(this.bookShelf[i].title === title) {
      var bookToRemove = this.bookShelf[i];
      this.bookShelf.splice(this.bookShelf.indexOf(bookToRemove), 1);
      return true;
    }
  }
  return false;
};

Library.prototype.removeBooksByAuthor = function(authorName) {
  var booksToKeep = this.bookShelf.filter(function(book) {
    return book.author !== authorName;
  })
  var booksToRemove = this.bookShelf.filter(function(book) {
    return book.author === authorName;
  })
  if(booksToRemove.length) {
    this.bookShelf = booksToKeep;
    return true
  }
  return false
};

Library.prototype.getRandomBook = function() {
   if(!this.bookShelf.length) {
     return null;
   }
   return this.bookShelf[Math.floor(Math.random()*this.bookShelf.length)];
};

Library.prototype.getBooksByTitle = function(title) {
  var matchingBooks = this.bookShelf.filter(function(book) {
    return book.title.indexOf(title) > -1;
  })
  return matchingBooks;
};

//SOLUTION USES .includes() WHICH IS ES6
  // var matchingBooks = this.bookShelf.filter(function(book) {
  //   return book.title.includes(title)
  // })
  // return matchingBooks

Library.prototype.getBooksByAuthor = function(authorName) {
  var matchingAuthor = this.bookShelf.filter(function(book) {
    return book.author.indexOf(authorName) > -1;
  })
  return matchingAuthor;
};

Library.prototype.addBooks = function(aBooks) {
  var booksAddedCount = 0;
  for(var i = 0; i < aBooks.length; i++) {
    if (this.addBook(aBooks[i])) {
      booksAddedCount++
    }
  }
  return booksAddedCount;
};

Library.prototype.getAuthors = function() {
  var listOfAuthors = this.bookShelf.map(function(book) {
    return book.author
  });
  var allAuthors = listOfAuthors.filter(function(author, i) {
    //if the index being returned is smaller than the current index that means instance already exists, otherwise we will add it to the array, need to return indexOf only >.
    return listOfAuthors.indexOf(author) >= i
  })
  return allAuthors;
};

Library.prototype.getRandomAuthorName = function() {
  var authors = this.getAuthors();
  if(authors.length) {
    return authors[Math.floor(Math.random() * authors.length)];
  }
  return null;
};

Library.prototype.setLocalStorage = function() {
  localStorage.setItem('Library', JSON.stringify(this.bookShelf))
}

Library.prototype.retrieveLocalStorage = function() {
  if(localStorage.length) {
    var parsedLocalStorageLibrary = JSON.parse(localStorage.getItem('Library'))
    for(var i = 0; i < parsedLocalStorageLibrary.length; i++) {
      console.log(parsedLocalStorageLibrary[i].title);
      this.addBook(new Book(
        parsedLocalStorageLibrary[i].title,
        parsedLocalStorageLibrary[i].author,
        parsedLocalStorageLibrary[i].numPages,
        parsedLocalStorageLibrary[i].pubDate
      ))
    }
  }
}

document.addEventListener('DOMContentLoaded', function(e) {
  window.gLibrary = new Library();
  // addAllBooks(allBooks);
  gLibrary.retrieveLocalStorage();
})

// function addAllBooks(books) {
//   books.forEach(function(e) {
//     (gLibrary.bookShelf).push(e)
//   })
// }

setTimeout(function(){ console.log(gLibrary.bookShelf);}, 500);

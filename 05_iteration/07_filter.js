const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const greaterThan4 = numbers.filter((num) => num > 4);
console.log(greaterThan4);

const lessThan4 = numbers.filter((num) => {
  return num < 4;
});
console.log(lessThan4);

const greaterThan6 = [];
numbers.forEach((num) => {
  if (num > 6) {
    greaterThan6.push(num);
  }
});
console.log(greaterThan6);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const historBooks = books.filter((book) => book.genre === "History");
const publishedBooksAfter2000 = books.filter((book) => {
  return book.publish > 2000;
});
const publishedHistoryBooksAfter1995 = books.filter((book) => {
  return book.publish >= 1995 && book.genre === "History";
});
console.log(historBooks);
console.log(publishedBooksAfter2000);
console.log(publishedHistoryBooksAfter1995);

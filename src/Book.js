
class Book {
    static count = 0;

    constructor(title, author, ISBN, price) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.price = price;
        Book.count++;
    }

    //Modification of book attributes
    setTitle(title) {
        this.title = title;
    }

    setAuthor(author) {
        this.author = author;
    }

    setISBN(ISBN) {
        this.ISBN = ISBN;
    }

    setPrice(price) {
        this.price = price;
    }

    //remove book by taking title attribute
    removeBook(title) {
        this.books = this.books.filter(book => book.title !== title);
    }

    static findNumberOfCreatedBooks() {
        return Book.count;
    }

    equals(otherBook) {
        return this.ISBN === otherBook.ISBN && this.price === otherBook.price;
    }

    displayInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}, Price: ${this.price}`);
    }
    
}
export default Book;

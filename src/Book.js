class Book {
  static bookCount = 0; // Static property to keep track of book count

  // Constructor with default values
  constructor(title = '', author = '', isbn = '', price = 0.0) {
    this._attributes = {
      title,
      author,
      isbn,
      price
    };
    Book.bookCount++; // Increment book count on each new instance
  }

  // Display attribute values
  getAttribute(attribute) {
    if (this._attributes.hasOwnProperty(attribute)) {
      return this._attributes[attribute];
    }
    throw new Error(`Attribute ${attribute} not found`);
  }

  // Modify attribute values
  setAttribute(attribute, value) {
    if (this._attributes.hasOwnProperty(attribute)) {
      this._attributes[attribute] = value;
    } else {
      throw new Error(`Attribute ${attribute} not found`);
    }
  }

  // Display number of Book Object Created
  static getNumberOfCreatedBooks() {
    return Book.bookCount;
  }

  // Compare two books for equality based on ISBN & price
  equals(otherBook) {
    return this._attributes.isbn === otherBook.getAttribute('isbn') && 
           this._attributes.price === otherBook.getAttribute('price');
  }

  // Method to display book information
  displayInfo() {
    console.log(`Title: ${this._attributes.title}, Author: ${this._attributes.author}, ISBN: ${this._attributes.isbn}, Price: ${this._attributes.price}`);
  }
}

/*
let book1 = new Book("Canigula","Patcher","Damacus",0)
book1.displayInfo()
*/

export default Book;
 
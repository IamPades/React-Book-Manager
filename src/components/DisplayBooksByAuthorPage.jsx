function DisplayBooksByAuthorPage() {
  const [author, setAuthor] = useState('');
  const { inventory } = useContext(InventoryContext);
  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleSearch = () => {
    const results = inventory.filter(book => book.getAttribute('author').toLowerCase() === author.toLowerCase());
    setFilteredBooks(results);
  };

  return (
    <div>
      <h2>Display Books by Author</h2>
      <input 
        type="text" 
        value={author} 
        onChange={(e) => setAuthor(e.target.value)} 
        placeholder="Enter Author's Name" 
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {filteredBooks.map((book, index) => (
          <div key={index}>
            <p>{book.getAttribute('title')} - {book.getAttribute('price')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

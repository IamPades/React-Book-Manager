function DisplayBooksUnderPricePage() {
  const [price, setPrice] = useState('');
  const { inventory } = useContext(InventoryContext);
  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleSearch = () => {
    const results = inventory.filter(book => book.getAttribute('price') <= price);
    setFilteredBooks(results);
  };

  return (
    <div>
      <h2>Display Books Under a Certain Price</h2>
      <input 
        type="number" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
        placeholder="Enter Price" 
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {filteredBooks.map((book, index) => (
          <div key={index}>
            <p>{book.getAttribute('title')} - {book.getAttribute('author')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

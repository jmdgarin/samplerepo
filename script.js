 // Mock database
 const database = [
    { title: 'Book 1', author: 'Author 1' },
    { title: 'Book 2', author: 'Author 2' },
    { title: 'Book 3', author: 'Author 3' },
    { title: 'Book 4', author: 'Author 1' },
    { title: 'Book 5', author: 'Author 2' },
    { title: 'Book 6', author: 'Author 3' },
  ];

  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  function searchBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredBooks = database.filter(book =>
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm)
    );

    displayResults(filteredBooks);
  }

  function displayResults(books) {
    searchResults.innerHTML = '';

    if (books.length === 0) {
      searchResults.innerHTML = 'No results found.';
      return;
    }

    const ul = document.createElement('ul');
    books.forEach(book => {
      const li = document.createElement('li');
      li.textContent = `${book.title} by ${book.author}`;
      ul.appendChild(li);
    });

    searchResults.appendChild(ul);
  }

  searchInput.addEventListener('input', searchBooks);

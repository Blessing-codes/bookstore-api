const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// 1. GET / (Stretch goal)
app.get('/', (req, res) => {
  res.send('Welcome to the Bookstore API!');
});

// 2. GET /api/health
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// 3. GET /api/books
app.get('/api/books', (req, res) => {
  const books = [
    { id: 1, title: 'Atomic Habits', author: 'James Clear' },
    { id: 2, title: 'Clean Code', author: 'Robert C. Martin' }
  ];
  res.json(books);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
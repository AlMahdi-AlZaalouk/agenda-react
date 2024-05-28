// server.cjs
const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./src/db/database.cjs');

const app = express();
const port = 3001;

app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));

// Root route to serve a basic response
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/api/agenda', (req, res) => {
  const stmt = db.prepare('SELECT * FROM agenda ORDER BY day, time');
  const agenda = stmt.all();
  res.json(agenda);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

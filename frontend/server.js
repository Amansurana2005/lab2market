const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 4173;
const distPath = path.join(__dirname, 'dist');

app.use(express.static(distPath));

// For any other route, serve index.html (SPA fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Frontend static server running on port ${port}`);
});

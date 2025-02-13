const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Importar o middleware CORS

const app = express();
const PORT = 3000;

// Serve static files from the 'assets' directory
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use(cors()); // Usar o middleware CORS

// Endpoint to get images from the portfolio directory
app.get('/api/images', (req, res) => {
  const directoryPath = path.join(__dirname, 'assets', 'img', 'portfolio');
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).send('Unable to scan directory: ' + err);
    }
    const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));
    res.json(images);
  });
});

// Rota para a raiz
app.get('/', (req, res) => {
  res.send('Servidor está funcionando. Acesse /api/images para obter as imagens.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

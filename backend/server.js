const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

app.get('/menu', (req, res) => {
  const file = path.join(__dirname, '..', 'data', 'menu.json');
  res.type('json').send(fs.readFileSync(file, 'utf-8'));
});

app.use('/assets', express.static(path.join(__dirname, '..', 'assets')));
app.use('/frontend', express.static(path.join(__dirname, '..', 'frontend')));
app.use('/data', express.static(path.join(__dirname, '..', 'data')));

app.listen(PORT, () => {
  console.log(`Quiosque rodando na porta ${PORT}`);
});

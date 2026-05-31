const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Rota para entregar a tela de login inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

// Rota de validação do Login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    if (email === 'admin@quiosque.com' && password === 'quiosque123') {
        return res.json({ success: true, redirect: '/frontend/dashboard.html' });
    } else {
        return res.json({ success: false, message: 'E-mail ou senha incorretos!' });
    }
});

// Rota para entregar o menu do sistema
app.get('/menu', (req, res) => {
    const file = path.join(__dirname, '..', 'data', 'menu.json');
    res.type('json').send(fs.readFileSync(file, 'utf-8'));
});

// Configuração das pastas de arquivos estáticos
app.use('/assets', express.static(path.join(__dirname, '..', 'assets')));
app.use('/frontend', express.static(path.join(__dirname, '..', 'frontend')));
app.use('/data', express.static(path.join(__dirname, '..', 'data')));

app.listen(PORT, () => {
    console.log(`Quiosque rodando na porta ${PORT}`);
});
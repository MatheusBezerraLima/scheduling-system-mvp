const userController = require('./src/controller/UserController');
require('dotenv').config(); // Garante que o .env foi carregado

console.log('--- APLICAÇÃO CONECTANDO COM:', process.env.DATABASE_URL, '---');

const app = require('./app')();

const PORT = process.env.PORT || 3000;

app.post('/register', userController.create);

app.listen(PORT, async(err) => {
    console.log(`Servidor rodando na porta ${PORT}`);
})

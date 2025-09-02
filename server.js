const userController = require('./src/controller/UserController');
const db = require('./src/config/database');
require('dotenv').config(); // Garante que o .env foi carregado

console.log('--- APLICAÇÃO CONECTANDO COM:', process.env.DATABASE_URL, '---');

const app = require('./app')();

const PORT = process.env.PORT || 3000;

db.authenticate().then(() => {
    console.log("Conectado com o banco");
    return
})

app.post('/register', userController.create);

app.listen(PORT, async(err) => {
    console.log(`Servidor rodando na porta ${PORT}`);
})

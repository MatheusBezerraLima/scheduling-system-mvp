const userController = require('./src/controller/UserController');

const app = require('./app')();

const PORT = process.env.PORT || 3000;

app.use('/register', userController.createUser);

app.listen(PORT, async(err) => {
    console.log(`Servidor rodando na porta ${PORT}`);
})

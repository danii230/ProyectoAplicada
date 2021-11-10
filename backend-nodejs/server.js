const express = require('express')
const morgan = require("morgan");
const cors = require("cors");
require ('dotenv').config

const app = express()

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());



app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))


//Routes

const funcionarioRouters = require('./app/routes/funcionario')
const sexoRouters = require('./app/routes/sexo')

app.get("/", (req, res) => {
    res.json({ message: "Inicio del BackEnd" });
  });
  app.use(require('./app/routes/login'));
app.use(funcionarioRouters)
app.use(sexoRouters)




// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});





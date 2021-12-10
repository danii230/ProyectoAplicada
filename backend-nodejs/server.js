const express = require('express')
const morgan = require("morgan");
const cors = require("cors");

require('dotenv').config

const app = express()

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());



app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({
    limit: '25mb',
 extended: false
}));

// app.use(express.json({limit: '600mb'}));
// app.use(express.urlencoded({limit: '600mb',extended: true}));


//Routes
const funcionarioRouters = require('./app/routes/funcionario')
const sexoRouters = require('./app/routes/sexo')
const trimestreRouters = require('./app/routes/trimestre')
const departamentoRouters = require('./app/routes/departamento')
const transaccionRouters = require('./app/routes/transaccion')
const solicitudRouters = require('./app/routes/solicitud')
const avanceRouters = require('./app/routes/avance')
const bitacoraAuditoriaRouters = require('./app/routes/bitacoraAuditoria')
const bitacoraRouters = require('./app/routes/bitacora')

app.get("/", (req, res) => {
    res.json({ message: "Inicio del BackEnd" });
});
app.use(require('./app/routes/login'));
app.use(funcionarioRouters)
app.use(sexoRouters)
app.use(trimestreRouters)
app.use(departamentoRouters)
app.use(transaccionRouters)
app.use(solicitudRouters)
app.use(avanceRouters)
app.use(bitacoraAuditoriaRouters)
app.use(bitacoraRouters)



// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});





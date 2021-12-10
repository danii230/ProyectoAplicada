const { MAX } = require('mssql');
const db_conection = require('../../config/db.js');

// Get
exports.getFuncionario = (req, res) => {

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[getFuncionario] ", function (err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        if (!result.recordset[0]) {
                        } else {

                            res.json(result.recordset);
                        }
                    }
                });
        }

    });
}

//Insert
exports.ingresarFuncionario = (req, res) => {
    db_conection.sql.connect(db_conection.config, function (err) {

        console.log(req.body);
        if (err) {
            console.log(err);
        } else {
            var request = new db_conection.sql.Request();
            request.input('nombre', db_conection.sql.VarChar, req.body.nombre)
                .input('apellidos', db_conection.sql.VarChar, req.body.apellidos)
                .input('fechaNacimiento', db_conection.sql.Date, req.body.fechaNacimiento)
                .input('idSexo', db_conection.sql.TinyInt, req.body.idSexo)
                .input('loginName', db_conection.sql.VarChar, req.body.loginName)
                .input('password', db_conection.sql.VarChar, req.body.password)
                .input('idDepartamento', db_conection.sql.TinyInt, req.body.idDepartamento)
                .input('foto', db_conection.sql.VarBinary(MAX),  Buffer.from(req.body.foto))
                .query("exec [dbo].[ingresarFuncionario] @nombre, @apellidos, @fechaNacimiento, @idSexo, @loginName, @password, @idDepartamento, @foto");
        }

    });
}




//Delete
exports.eliminarFuncionario = (req, res) => {

    const { idFuncionario } = req.params;

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[eliminarFuncionario] '" + idFuncionario + "'");
        }

    });
}

//Delete
exports.modificarFuncionario = (req, res) => {

    const { idFuncionario, nombre, apellidos, fechaNacimiento, idSexo, loginName, password, idDepartamento } = req.body
    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[modificarFuncionario] '" + idFuncionario + "','" + nombre + "','" + apellidos + "','" + fechaNacimiento + "','" + idSexo + "','" + loginName + "','" + password + "','" + idDepartamento + "'");
        }
    });
}

// Get
exports.getFuncionarioId = (req, res) => {
    const { id } = req.params;

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[getFuncionarioId]'" + id + "'", function (err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        if (!result.recordset[0]) {
                            res.json('No existe');
                        } else {

                            res.json(result.recordset);
                        }
                    }
                });
        }

    });

}
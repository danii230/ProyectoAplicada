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

    const { nombre, apellidos,idSexo, loginName, password,idDepartamento } = req.body
    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(


                "exec [dbo].[ingresarFuncionario] '" + nombre + "','" + apellidos + "','" + idSexo + "','" + loginName + "','" + password + "','" + idDepartamento +"'");
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

    const { idFuncionario, nombre, apellidos, fechaNacimiento, idSexo, loginName, password, foto, idDepartamento } = req.body
    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[modificarFuncionario] '" + idFuncionario + nombre + "','" + apellidos + "','" + fechaNacimiento + "','" + idSexo + "','" + loginName + "','" + password + "','" + idDepartamento + "','" + foto + "'");
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
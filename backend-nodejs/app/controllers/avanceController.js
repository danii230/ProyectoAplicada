const { MAX } = require('mssql');
const db_conection = require('../../config/db.js');

// Get
exports.getAvance = (req, res) => {

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[getAvance] ", function (err, result) {
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
exports.ingresarAvance = (req, res) => {

    const { idTrimestre, idUsuarioAplicativo, idSolicitud, finalizado } = req.body
    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {
            var request = new db_conection.sql.Request();
            request.input('idTrimestre', db_conection.sql.TinyInt, req.body.idTrimestre)
                .input('idUsuarioAplicativo', db_conection.sql.SmallInt, req.body.idUsuarioAplicativo)
                .input('idSolicitud', db_conection.sql.SmallInt, req.body.idSolicitud)
                .input('finalizado', db_conection.sql.Bit, req.body.finalizado)
                .input('documento', db_conection.sql.VarBinary(MAX),  Buffer.from(req.body.documento))
                .query("exec [dbo].[ingresarAvance] @idTrimestre, @idUsuarioAplicativo, @idSolicitud, @finalizado, @documento");
     

            // db_conection.sql.query(

            //     "exec [dbo].[ingresarAvance] '" + idTrimestre + "','" + idUsuarioAplicativo + "','" + idSolicitud + "','" +finalizado + "'");
        }

    });
}


//Delete
exports.eliminarAvance = (req, res) => {

    const { idAvance } = req.params;
    const { idUsuarioAplicativo } = req.params;

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[eliminarAvance] '" + idAvance + "','"+ idUsuarioAplicativo + "'");
        }

    });
}

//Modificar
exports.modificarAvance = (req, res) => {

    const { idAvance,idTrimestre, idUsuarioAplicativo, idSolicitud, finalizado, idUsuarioAplicativo_temp } = req.body
      db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[modificarAvance] '" + idAvance + "','" + idTrimestre + "','" + idUsuarioAplicativo + "','" + idSolicitud + "','" +finalizado + "','" + idUsuarioAplicativo_temp + "'");
        }
    });
}

// Get
exports.getAvanceId = (req, res) => {
    const { id } = req.params;

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[getAvanceId]'" + id + "'", function (err, result) {
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
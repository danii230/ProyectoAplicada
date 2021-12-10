const { MAX } = require('mssql');
const db_conection = require('../../config/db.js');


// Get
exports.getSolicitud = (req, res) => {

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[getSolicitud] ", function (err, result) {
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
exports.ingresarSolicitud = (req, res) => {

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            // db_conection.sql.query(

            //     "exec [dbo].[ingresarSolicitud] '" + idUsuarioAplicativo + "','"+ idResponsableTI + "','" + fechaInicio + "','" + fechaFin + "','" + idResponsableUsuarioFinal + "'");
       

            var request = new db_conection.sql.Request();
            request.input('idUsuarioAplicativo', db_conection.sql.SmallInt, req.body.idUsuarioAplicativo)
                .input('idResponsableTI', db_conection.sql.SmallInt, req.body.idResponsableTI)
                .input('fechaInicio', db_conection.sql.DateTime, req.body.fechaInicio)
                .input('fechaFin', db_conection.sql.Date, req.body.fechaFin)
                .input('idResponsableUsuarioFinal', db_conection.sql.SmallInt, req.body.idResponsableUsuarioFinal)
                .input('documentoActaConstitutiva', db_conection.sql.VarBinary(MAX),  Buffer.from(req.body.documentoActaConstitutiva))
                .query("exec [dbo].[ingresarSolicitud] @idUsuarioAplicativo, @idResponsableTI, @fechaInicio, @fechaFin, @idResponsableUsuarioFinal, @documentoActaConstitutiva");
         
        }

    });
}


//Delete
exports.eliminarSolicitud = (req, res) => {

    // const { idSolicitud ,idUsuarioAplicativo} = req.params;

    const { idSolicitud } = req.params;

    const { idUsuarioAplicativo } = req.params;

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[eliminarSolicitud] '" + idSolicitud + "','"+ idUsuarioAplicativo + "'");
        }

    });
}

//Modificar
exports.modificarSolicitud = (req, res) => {

    const { idSolicitud,idUsuarioAplicativo, idResponsableTI, fechaInicio, fechaFin, idResponsableUsuarioFinal, idUsuarioAplicativo_temp} = req.body
    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[modificarSolicitud] '" + idSolicitud + "','" + idUsuarioAplicativo + "','"+ idResponsableTI + "','" + fechaInicio + "','" + fechaFin + "','" + + idResponsableUsuarioFinal + "','" +idUsuarioAplicativo_temp + "'");
        }
    });
}

// Get
exports.getSolicitudId = (req, res) => {
    const { id } = req.params;

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[getSolicitudId]'" + id + "'", function (err, result) {
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
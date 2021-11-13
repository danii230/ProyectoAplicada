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

    const { idResponsableTI, fechaInicio, fechaFin, idResponsableUsuarioFinal, documentoActaConstitutiva } = req.body
    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[ingresarSolicitud] '" + idResponsableTI + "','" + fechaInicio + "','" + fechaFin + "','" + idResponsableUsuarioFinal + "','" + documentoActaConstitutiva + "'");
        }

    });
}


//Delete
exports.eliminarSolicitud = (req, res) => {

    const { idSolicitud } = req.params;


    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[eliminarSolicitud] '" + idSolicitud + "'");
        }

    });
}

//Modificar
exports.modificarSolicitud = (req, res) => {

    const { idSolicitud,idResponsableTI, fechaInicio, fechaFin, idResponsableUsuarioFinal, documentoActaConstitutiva } = req.body
    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[modificarSolicitud] '" + idSolicitud + "','" + idResponsableTI + "','" + fechaInicio + "','" + idResponsableUsuarioFinal + "','" + documentoActaConstitutiva + "'");
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
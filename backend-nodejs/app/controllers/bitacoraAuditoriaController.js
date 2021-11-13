const db_conection = require('../../config/db.js');

// Get
exports.getBitacoraAuditoria = (req, res) => {

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[getBitacoraAuditoria] ", function (err, result) {
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
exports.ingresarBitacoraAuditoria = (req, res) => {

    const { idTransaccion,descripcion,idUsuarioAplicativo,fechaHora,idSolicitud } = req.body
    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[ingresarBitacoraAuditoria] '"+ idTransaccion + "','"+ descripcion + "','" +idUsuarioAplicativo + "','" +  fechaHora + "','" + idSolicitud + "'");
        }

    });
}


//Delete
exports.eliminarBitacoraAuditoria = (req, res) => {

    const { idBitacoraAuditoria } = req.params;
    
  
    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[eliminarBitacoraAuditoria] '" + idBitacoraAuditoria + "'");
        }

    });
}

//Modificar
exports.modificarBitacoraAuditoria = (req, res) => {

    const { idBitacoraAuditoria,idTransaccion,descripcion,idUsuarioAplicativo,fechaHora,idSolicitud } = req.body
    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[modificarBitacoraAuditoria] '" + idBitacoraAuditoria+ "','" + idTransaccion + "','" + + descripcion + "','" +idUsuarioAplicativo + "','" +  fechaHora + "','" + idSolicitud + "'");
        }
    });
}

// Get
exports.getBitacoraAuditoriaId = (req, res) => {
    const { id } = req.params;

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[getBitacoraAuditoriaId]'" + id + "'", function (err, result) {
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
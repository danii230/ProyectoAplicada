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

    const { idTrimestre,documento,fechaHora,idUsuarioAplicativo,idSolicitud } = req.body
    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[ingresarAvance] '"+ idTrimestre + "','"+ documento + "','" +fechaHora + "','" +  idUsuarioAplicativo + "','" + idSolicitud + "'");
        }

    });
}


//Delete
exports.eliminarAvance = (req, res) => {

    const { idAvance } = req.params;
    
  
    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[eliminarAvance] '" + idAvance + "'");
        }

    });
}

//Modificar
exports.modificarAvance = (req, res) => {

    const { idAvance,idTrimestre,documento,fechaHora,idUsuarioAplicativo,idSolicitud } = req.body
    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[modificarAvance] '" + idAvance+ "','" +idTrimestre + "','"+ documento + "','" +fechaHora + "','" +  idUsuarioAplicativo + "','" + idSolicitud + "'");
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
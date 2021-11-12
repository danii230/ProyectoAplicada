const db_conection = require('../../config/db.js');

// Get
exports.getTrimestre = (req, res) => {

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[getTrimestre] ", function (err, result) {
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
exports.ingresarTrimestre = (req, res) => {

    const { descripcion } = req.body
    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[ingresarTrimestre] '" + descripcion + "'");
        }

    });
}


//Delete
exports.eliminarTrimestre = (req, res) => {

    const { idTrimestre } = req.params;

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[eliminarTrimestre] '" + idTrimestre + "'");
        }

    });
}

//Delete
exports.modificarTrimestre = (req, res) => {

    const { idTrimestre, descripcion } = req.body
    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[modificarTrimestre] '" + idTrimestre + "','" + descripcion + "'");
        }
    });
}

// Get
exports.getTrimestreId = (req, res) => {
    const { id } = req.params;

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[getTrimesteId]'" + id + "'", function (err, result) {
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
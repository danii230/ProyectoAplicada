const db_conection = require('../../config/db.js');
// Get
exports.getSexo = (req, res) => {

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[getSexo] ", function (err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        if (!result.recordset[0]) {
                            res.json('No existe');
                        } else {

                            res.json(result.recordsets);
                        }
                    }
                });
        }

    });
}

//Insert
exports.ingresarSexo = (req, res) => {

    const { descripcion } = req.body

    console.log(descripcion)
    res.json('new produtc')
    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[ingresarSexo] '" + descripcion + "'");
        }

    });
}


//Delete
exports.eliminarSexo = (req, res) => {

    const { idSexo } = req.body

    console.log(idSexo)
    res.json('idSexo')
    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[eliminarSexo] '" + idSexo + "'");
        }

    });
}

//Delete
exports.modificarSexo = (req, res) => {

    const { idSexo, descripcion } = req.body

    console.log(idSexo, descripcion)
    res.json({ idSexo, descripcion })
    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[modificarSexo] '" + idSexo + "','" + descripcion + "'");
        }

    });
}

// Get
exports.getSexoId = (req, res) => {
    const { id } = req.params;

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[getSexoId]'" + id + "'", function (err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        if (!result.recordset[0]) {
                            res.json('No existe');
                        } else {

                            res.json(result.recordsets);
                        }
                    }
                });
        }

    });
 
}
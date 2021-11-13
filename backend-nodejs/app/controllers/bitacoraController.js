const db_conection = require('../../config/db.js');
//Insert
exports.ingresarBitacora = (req, res) => {

    const { nombre,idTransaccion} = req.body
    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[ingresarBitacora] '"+ nombre + "','"+ parseInt(idTransaccion, 10) +"'");
        }

    });
}
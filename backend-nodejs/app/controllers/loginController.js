const db_conection = require('../../config/db.js');

exports.login = (req, res) => {

    const { loginName } = req.params;

    const { password } = req.params;


    db_conection.sql.connect(db_conection.config, function (err) {



        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "exec [dbo].[existeUsuario] '" + loginName + "','" + password + "'", function (err, result) {

                    if (err) {
                        console.log(err);
                    } else {
                        if (!result.recordset[0]) {
                            res.json('No existe');
                        } else {
                        //     console.log(result.recordset[0].idFuncionario);
                            res.json(result.recordset[0].idFuncionario);
                        }
                    }
                });
        }

    });
};

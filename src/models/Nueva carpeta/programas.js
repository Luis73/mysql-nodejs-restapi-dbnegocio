const mysql = require('mysql'); 

connection = mysql.createConnection({
  host:'us-cluster-east-01.k8s.cleardb.net',
  user: 'b4eaef41bd9fdc',
  password: '440fdc39',
  database: 'heroku_1354e4df67543b9',
  debug: false,
  multipleStatements: true    
});

let userModel = {};

userModel.getProgramas = (callback) => {
  if (connection) {
    connection.query('SELECT * FROM programaciondespacho ORDER BY id',
      (err, rows) => {
        if (err) {
          throw err
        }
        else {
          callback(null, rows);
        }
      }
    )
  }
};

userModel.getProgramaId = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM programaciondespacho WHERE id=' + userData.id,
      (err, rows) => {
        if (err) {
          throw err
        }
        else {
          callback(null, rows);
        }
      }
    )
  }
  
};

userModel.insertPrograma = (  userData, callback) => {
  if (connection) {
    connection.query('INSERT INTO programaciondespacho SET ?', userData,
      (err, result) => {
        if (err) {
          throw err;
        } else {
          callback(null, {'insertId': result.insertId})
        }
      }
    )
  }
};

userModel.updatePrograma = (userData, callback) => {
  if (connection) {

    const sql = `
      UPDATE programaciondespacho SET
      codempresa= ${connection.escape(userData.tipoloc)},
      tipoloc= ${connection.escape(userData.tipoloc)},
      codloc= ${connection.escape(userData.tipoloc)},
      codtran= ${connection.escape(userData.tipoloc)},
      ndespacho= ${connection.escape(userData.tipoloc)},
      fecha= ${connection.escape(userData.tipoloc)},
      codpartida= ${connection.escape(userData.tipoloc)},
      observaciones= ${connection.escape(userData.tipoloc)},
      estado= ${connection.escape(userData.tipoloc)},
      reporte= ${connection.escape(userData.tipoloc)},
      reporte_fecha= ${connection.escape(userData.tipoloc)},
      idnube= ${connection.escape(userData.tipoloc)},
      activo= ${connection.escape(userData.tipoloc)},
      anulado= ${connection.escape(userData.tipoloc)},
      updated_at= ${connection.escape(userData.tipoloc)}
      WHERE id = ${userData.id}`;

    connection.query(sql, function (err, result) {
      if (err) {
        throw err;
      } else {
        callback(null, {
          "msg": "success"
        })
      }
    });
  }
};

userModel.deletePrograma = (id, callback) => {
  if (connection) {
    var sqlExists = `
      SELECT * FROM programaciondespacho WHERE id = ${connection.escape(id)}
    `;
    connection.query(sqlExists, (err, row) => {
      if (row) {
        var sql = `DELETE FROM programaciondespacho WHERE id=` + connection.escape(id);
        connection.query(sql, (err, result) => {
          if (err) {
            throw err;
          } else{
            callback(null, {
              "msg": "deleted"
            });
          }
        });
      } else {
        callback(null, {
          "msg": "not Exists"
        });
      }
    });
  }
}

module.exports = userModel;

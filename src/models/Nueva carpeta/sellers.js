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

userModel.getSellers = (callback) => {
  if (connection) {
    connection.query('SELECT * FROM Sellers ORDER BY id',
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

userModel.getSellerId = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM sellers WHERE id=' + userData.id,
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

userModel.getSellerImei = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM sellers WHERE imei=' + userData.imei,
      (err, rows) => {
        if (err) {
          throw err
        }
        else {
          callback (null, rows);
        }
      }
    )

  }
  
};


userModel.insertSeller = (  userData, callback) => {
  if (connection) {
    connection.query('INSERT INTO Sellers SET ?', userData,
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

userModel.updateSeller = (userData, callback) => {
  if (connection) {

    const sql = `
      UPDATE Sellers SET
      tipoloc= ${connection.escape(userData.tipoloc)},
      codloc= ${connection.escape(userData.codloc)},
      codtie= ${connection.escape(userData.codtie)},
      codven= ${connection.escape(userData.codven)},
      nomven= ${connection.escape(userData.nomven)},
      dirven= ${connection.escape(userData.dirven)},
      locven= ${connection.escape(userData.locven)},
      tele01= ${connection.escape(userData.tele01)},
      tele02= ${connection.escape(userData.tele02)},
      fecing= ${connection.escape(userData.fecing)}, 
      siglaven= ${connection.escape(userData.siglaven)},
      activo= ${connection.escape(userData.activo)},
      cobrador= ${connection.escape(userData.cobrador)}, 
      fecinivig= ${connection.escape(userData.fecinivig)},
      fecfinvig= ${connection.escape(userData.fecfinvig)}, 
      idventa= ${connection.escape(userData.idventa)},
      imei= ${connection.escape(userData.imei)}, 
      provincia= ${connection.escape(userData.provincia)}, 
      usuarioweb= ${connection.escape(userData.usuarioweb)}, 
      claseweb= ${connection.escape(userData.claseweb)}, 
      tokenweb= ${connection.escape(userData.tokenweb)}, 
      codlinea= ${connection.escape(userData.codlinea)}, 
      codvenidem= ${connection.escape(userData.codvenidem)}, 
      updated_at= ${connection.escape(userData.updated_at)} 
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

userModel.deleteSeller = (id, callback) => {
  if (connection) {
    var sqlExists = `
      SELECT * FROM Sellers WHERE id = ${connection.escape(id)}
    `;
    connection.query(sqlExists, (err, row) => {
      if (row) {
        var sql = `DELETE FROM Sellers WHERE id=` + connection.escape(id);
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

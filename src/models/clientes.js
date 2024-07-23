const mysql = require('mysql'); 

connection = mysql.createConnection({
  host:'51.81.109.115',
  user: 'gruporom_dbnegocio',
  password: '7(?j=Xej;eV%',
  database: 'gruporom_dbnegocio',
  debug: false,
  multipleStatements: true    
});

let userModel = {};

userModel.getClientes = (callback) => {
  if (connection) {
      connection.query('select * from clientes',
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

userModel.getClienteId = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM clientes WHERE id= ' + userData.id,
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

userModel.getClienteCodven = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM clientes WHERE codempresa=' + userData.codempresa +' and codven=' + userData.codven ,
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


userModel.insertCliente = (  userData, callback) => {
  if (connection) {
    connection.query('INSERT INTO clientes SET ?', userData,
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

userModel.updateCliente = (userData, callback) => {
  if (connection) {

    const sql = `
      UPDATE clientes SET
      fecing= ${connection.escape(userData.fecing)},
      codcli= ${connection.escape(userData.codcli)},
      nombre= ${connection.escape(userData.nombre)},
      responsa= ${connection.escape(userData.responsa)},
      nomcli= ${connection.escape(userData.nomcli)},
      apepat= ${connection.escape(userData.apepat)},
      apemat= ${connection.escape(userData.apemat)},
      fecnac= ${connection.escape(userData.fecnac)},
      dni= ${connection.escape(userData.dni)},
      ruc= ${connection.escape(userData.ruc)},
      pasaporte= ${connection.escape(userData.pasaporte)},
      carnet= ${connection.escape(userData.carnet)},
      cedula= ${connection.escape(userData.cedula)},
      dircli= ${connection.escape(userData.dircli)},
      dis= ${connection.escape(userData.dis)},
      ubicli= ${connection.escape(userData.ubicli)},
      tele01= ${connection.escape(userData.tele01)},
      tele02= ${connection.escape(userData.tele02)},
      celular= ${connection.escape(userData.celular)},
      email= ${connection.escape(userData.email)},
      codven= ${connection.escape(userData.codven)},
      fecuc= ${connection.escape(userData.fecuc)},
      fecup= ${connection.escape(userData.fecup)},
      credito= ${connection.escape(userData.credito)},
      obs1= ${connection.escape(userData.obs1)},
      obs2= ${connection.escape(userData.obs2)},
      caution= ${connection.escape(userData.caution)},
      clase= ${connection.escape(userData.clase)},
      rucle= ${connection.escape(userData.rucle)},
      activo= ${connection.escape(userData.activo)},
      zona= ${connection.escape(userData.zona)},
      fecinivig= ${connection.escape(userData.fecinivig)},
      fecfinvig= ${connection.escape(userData.fecfinvig)},
      codentidad= ${connection.escape(userData.codentidad)},
      flagapp= ${connection.escape(userData.flagapp)},
      semaforo= ${connection.escape(userData.semaforo)},
      fmod= ${connection.escape(userData.fmod)},
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

userModel.deleteCliente = (id, callback) => {
  if (connection) {
    var sqlExists = `
      SELECT * FROM clientes WHERE id = ${connection.escape(id)}
    `;
    connection.query(sqlExists, (err, row) => {
      if (row) {
        var sql = `DELETE FROM clientes WHERE id=` + connection.escape(id);
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

const { response } = require('express'); 
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

userModel.getCustomers = (callback) => {
  if (connection) {
    connection.query('SELECT * FROM customers ORDER BY id',
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

userModel.getCustomerId = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM customers WHERE id=' + userData.id,
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

userModel.getCustomerControlId= (userData, callback) => {

//  connection.query('SELECT * FROM customers WHERE control_id = ' + userData.controlid + ' and codven = ' + userData.codven   ,

  if (connection) {
    connection.query('SELECT * FROM customers WHERE  codven = ' + userData.codven   ,
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


userModel.getCustomerRange = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM customers WHERE (control_id >= ' + userData.controlIdFrom + ' and control_id <=' + userData.controlIdTo  +' ) and codven=' +  userData.codVen ,
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

userModel.getCustomerCodven = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM customers WHERE codempresa=' + userData.codempresa +' and codven=' + userData.codven ,
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

userModel.getCustomerEmpCod = (userData, callback) => {
  var ordensql = 'SELECT * FROM customers WHERE codempresa=' + userData.codempresa +' and codcli=' + userData.codcli ;
  console.log(ordensql);
  if (connection) {
    connection.query( ordensql ,
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

userModel.getCustomerExiste = (userData, callback) => {
    var ordensql = 'SELECT count(*) as t1 FROM customers WHERE codempresa=' + userData.codempresa +' and codcli=' + userData.codcli ;
    console.log(ordensql);
    if (connection) {
      connection.query( ordensql ,
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

userModel.getCustomerCodcli = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM customers WHERE codempresa=' + userData.codempresa +' and codcli=' + userData.codcli ,
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

userModel.insertCustomer = (  userData, callback) => {
  var pCodEmpresa = userData.codempresa;
  var pCodcli = userData.codcli

  try{
        if (connection) {

         connection.query('INSERT INTO customers SET ?;', userData,
              (err, result) => {
                if (err) {
                  throw err;
                } else {
                  callback(null, {'insertId': result.insertId});

                // console.log(result);
                  console.log("Number of rows affected : " + result.affectedRows);
                  console.log("Number of records affected with warning : " + result.warningCount);
                  console.log("Message from MySQL Server : " + result.message);
                  
                
                }
              }
            )
        }
  }
  catch (e){
    console.log(e.MSG_ERROR);
    console.log(e.MSG_SUCCESS);
  } 
  finally{

  }  

};

userModel.updateCustomer = (userData, callback) => {
  console.log (userData.nombre);
  if (connection) {
    const sql = `
      UPDATE customers SET
      codempresa= ${connection.escape(userData.codempresa)},
      fecing= ${connection.escape(userData.fecing)},
      nombre= ${connection.escape(userData.nombre)},
      responsa= ${connection.escape(userData.responsa)},
      nomcli= ${connection.escape(userData.nomcli)},
      apepat= ${connection.escape(userData.apepat)},
      apemat= ${connection.escape(userData.apemat)},
      fecnac= ${connection.escape(userData.fecnac)},
      codentidad= ${connection.escape(userData.codentidad)},
      ndocumento= ${connection.escape(userData.ndocumento)},
      dni= ${connection.escape(userData.dni)},
      ruc= ${connection.escape(userData.ruc)},
      pasaporte= ${connection.escape(userData.pasaporte)},
      carnet= ${connection.escape(userData.carnet)},
      cedula= ${connection.escape(userData.cedula)},
      dircli= ${connection.escape(userData.dircli)},
      dis= ${connection.escape(userData.dis)},
      ubicli= ${connection.escape(userData.ubicli)},
      ubigeocompleto= ${connection.escape(userData.ubigeocompleto)},
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
      zonaaux= ${connection.escape(userData.zonaaux)},
      semaforo= ${connection.escape(userData.semaforo)},
      fecinivig= ${connection.escape(userData.fecinivig)},
      fecfinvig= ${connection.escape(userData.fecfinvig)},
      fmod= ${connection.escape(userData.fmod)},
      codmercado= ${connection.escape(userData.codmercado)},
      flagapp= ${connection.escape(userData.flagapp)}
      WHERE id = ${userData.id};`;

    console.log( sql)
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


userModel.updateCustomerCodcli = (userData, callback) => {
  console.log (userData.codcli);
  console.log (userData.nombre);
   if (connection) {

    const sql = `
      UPDATE customers SET
      fecing= ${connection.escape(userData.fecing)},
      nombre= ${connection.escape(userData.nombre)},
      responsa= ${connection.escape(userData.responsa)},
      nomcli= ${connection.escape(userData.nomcli)},
      apepat= ${connection.escape(userData.apepat)},
      apemat= ${connection.escape(userData.apemat)},
      fecnac= ${connection.escape(userData.fecnac)},
      codentidad= ${connection.escape(userData.codentidad)},
      ndocumento= ${connection.escape(userData.ndocumento)},
      dni= ${connection.escape(userData.dni)},
      ruc= ${connection.escape(userData.ruc)},
      pasaporte= ${connection.escape(userData.pasaporte)},
      carnet= ${connection.escape(userData.carnet)},
      cedula= ${connection.escape(userData.cedula)},
      dircli= ${connection.escape(userData.dircli)},
      dis= ${connection.escape(userData.dis)},
      ubicli= ${connection.escape(userData.ubicli)},
      ubigeocompleto= ${connection.escape(userData.ubigeocompleto)},
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
      zonaaux= ${connection.escape(userData.zonaaux)},
      semaforo= ${connection.escape(userData.semaforo)},
      fecinivig= ${connection.escape(userData.fecinivig)},
      fecfinvig= ${connection.escape(userData.fecfinvig)},
      fmod= ${connection.escape(userData.fmod)},
      codmercado= ${connection.escape(userData.codmercado)},
      flagapp= ${connection.escape(userData.flagapp)}
      WHERE codempresa = ${userData.codempresa} and codcli =${userData.codcli};`;

      console.log( sql)
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

userModel.deleteCustomer = (id, callback) => {
  if (connection) {
    var sqlExists = `
      SELECT * FROM customers WHERE id = ${connection.escape(id)}
    `;
    connection.query(sqlExists, (err, row) => {
      if (row) {
        var sql = `DELETE FROM customers WHERE id=` + connection.escape(id);
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

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

userModel.getArticulos = (callback) => {
  if (connection) {
    connection.query('SELECT * FROM articulos ORDER BY id',
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

userModel.getArticuloId = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM articulos WHERE id=' + userData.id,
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
userModel.insertArticulo = (  userData, callback) => {
  if (connection) {
    connection.query('INSERT INTO articulos SET ?', userData,
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

userModel.updateArticulo = (userData, callback) => {
  if (connection) {

    const sql = `
      UPDATE articulos SET
      codempresa= ${connection.escape(userData.codempresa)},
      codart= ${connection.escape(userData.codart)},
      nombre= ${connection.escape(userData.nombre)},
      fecuc= ${connection.escape(userData.fecuc)},
      fecuv= ${connection.escape(userData.fecuv)},
      fecut= ${connection.escape(userData.fecut)},
      costo= ${connection.escape(userData.costo)},
      precio1d= ${connection.escape(userData.precio1d)},
      precio2d= ${connection.escape(userData.precio2d)},
      precio1s= ${connection.escape(userData.precio1s)},
      precio2s= ${connection.escape(userData.precio2s)},
      codbarra= ${connection.escape(userData.codbarra)},
      visualiza= ${connection.escape(userData.visualiza)},
      afectoigv= ${connection.escape(userData.afectoigv)},
      actual= ${connection.escape(userData.actual)},
      cantidad= ${connection.escape(userData.cantidad)},
      cantidadst= ${connection.escape(userData.cantidadst)},
      activo= ${connection.escape(userData.activo)},
      precio3d= ${connection.escape(userData.precio3d)},
      precio3s= ${connection.escape(userData.precio3s)},
      precio4d= ${connection.escape(userData.precio4d)},
      precio4s= ${connection.escape(userData.precio4s)},
      feccrea= ${connection.escape(userData.feccrea)},
      cajax= ${connection.escape(userData.cajax)},
      unicaj= ${connection.escape(userData.unicaj)},
      serie= ${connection.escape(userData.serie)},
      modificado= ${connection.escape(userData.modificado)},
      flag1= ${connection.escape(userData.flag1)},
      flag2= ${connection.escape(userData.flag2)},
      mdscto= ${connection.escape(userData.mdscto)},
      fecinivig= ${connection.escape(userData.fecinivig)},
      fecfinvig= ${connection.escape(userData.fecfinvig)},
      peso= ${connection.escape(userData.peso)},
      unimedpeso= ${connection.escape(userData.unimedpeso)},
      flagapp= ${connection.escape(userData.flagapp)},
      flagcombo= ${connection.escape(userData.flagcombo)},
      costop= ${connection.escape(userData.costop)},
      precio1sp= ${connection.escape(userData.precio1sp)},
      precio2sp= ${connection.escape(userData.precio2sp)},
      precio3sp= ${connection.escape(userData.precio3sp)},
      precio4sp= ${connection.escape(userData.precio4sp)},
      mdsctop= ${connection.escape(userData.mdsctop)},
      codlinea= ${connection.escape(userData.codlinea)},
      codsunat= ${connection.escape(userData.codsunat)},
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

userModel.updateArticuloCodart = (userData, callback) => {
  if (connection) {

    const sql = `
      UPDATE articulos SET
      codempresa= ${connection.escape(userData.codempresa)},
      codart= ${connection.escape(userData.codart)},
      nombre= ${connection.escape(userData.nombre)},
      fecuc= ${connection.escape(userData.fecuc)},
      fecuv= ${connection.escape(userData.fecuv)},
      fecut= ${connection.escape(userData.fecut)},
      costo= ${connection.escape(userData.costo)},
      precio1d= ${connection.escape(userData.precio1d)},
      precio2d= ${connection.escape(userData.precio2d)},
      precio1s= ${connection.escape(userData.precio1s)},
      precio2s= ${connection.escape(userData.precio2s)},
      codbarra= ${connection.escape(userData.codbarra)},
      visualiza= ${connection.escape(userData.visualiza)},
      afectoigv= ${connection.escape(userData.afectoigv)},
      actual= ${connection.escape(userData.actual)},
      cantidad= ${connection.escape(userData.cantidad)},
      cantidadst= ${connection.escape(userData.cantidadst)},
      activo= ${connection.escape(userData.activo)},
      precio3d= ${connection.escape(userData.precio3d)},
      precio3s= ${connection.escape(userData.precio3s)},
      precio4d= ${connection.escape(userData.precio4d)},
      precio4s= ${connection.escape(userData.precio4s)},
      feccrea= ${connection.escape(userData.feccrea)},
      cajax= ${connection.escape(userData.cajax)},
      unicaj= ${connection.escape(userData.unicaj)},
      serie= ${connection.escape(userData.serie)},
      modificado= ${connection.escape(userData.modificado)},
      flag1= ${connection.escape(userData.flag1)},
      flag2= ${connection.escape(userData.flag2)},
      mdscto= ${connection.escape(userData.mdscto)},
      fecinivig= ${connection.escape(userData.fecinivig)},
      fecfinvig= ${connection.escape(userData.fecfinvig)},
      peso= ${connection.escape(userData.peso)},
      unimedpeso= ${connection.escape(userData.unimedpeso)},
      flagapp= ${connection.escape(userData.flagapp)},
      flagcombo= ${connection.escape(userData.flagcombo)},
      costop= ${connection.escape(userData.costop)},
      precio1sp= ${connection.escape(userData.precio1sp)},
      precio2sp= ${connection.escape(userData.precio2sp)},
      precio3sp= ${connection.escape(userData.precio3sp)},
      precio4sp= ${connection.escape(userData.precio4sp)},
      mdsctop= ${connection.escape(userData.mdsctop)},
      codlinea= ${connection.escape(userData.codlinea)},
      codsunat= ${connection.escape(userData.codsunat)},
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
userModel.deleteArticulo = (id, callback) => {
  if (connection) {
    var sqlExists = `
      SELECT * FROM articulos WHERE id = ${connection.escape(id)}
    `;
    connection.query(sqlExists, (err, row) => {
      if (row) {
        var sql = `DELETE FROM articulos WHERE id=` + connection.escape(id);
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

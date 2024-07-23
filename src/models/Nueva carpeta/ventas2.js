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

userModel.getVenta2Items = (callback) => {
  if (connection) {
    connection.query('SELECT * FROM ventas2 ORDER BY id',
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

userModel.getVentaDetailsId = (userData, callback) => {
  if (connection) {
    var cad1 ='select a.*, b.name from ventas2 a inner join products b '
    var cad2 ='on a.codart=b.codproduct where a.pedidovta='+ userData.id 
    
    var ordensql = cad1.concat(cad2);

    connection.query( ordensql,
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

userModel.getVentaDetailsPedidovta = (userData, callback) => {
  if (connection) {
    var cad1 ='SELECT a.* from ventas2 a  WHERE a.codempresa='+ userData.codempresa + ' and '
    var cad2 =' a.tipoloc=' + userData.tipoloc + ' and codloc=' + userData.codloc +' and a.pedidovta='+ userData.pedidovta
    var cad3 =' and a.item=' + userData.item
    
    var ordensql = cad1.concat(cad2).concat(cad3);
    console.log (ordensql);        
    connection.query( ordensql,
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

userModel.getVentaDetailsExiste = (userData, callback) => {
  if (connection) {
    var cad1 ='SELECT count(*) as t1 from ventas2 a  WHERE a.codempresa='+ userData.codempresa + ' and '
    var cad2 =' a.tipoloc=' + userData.tipoloc + ' and a.codloc=' + userData.codloc +' and a.pedidovta='+ userData.pedidovta
    var cad3 =' and a.item=' + userData.item
    
    var ordensql = cad1.concat(cad2).concat(cad3);
    console.log (ordensql);    

    connection.query( ordensql,  (err, rows) => {
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

                 
userModel.insertVenta2Item = (  userData, callback) => {
  if (connection) {
    connection.query('INSERT INTO ventas2 SET ?', userData,
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

/*
userModel.insertVentaItem = (  userData, callback) => {
  if (connection) {
    connection.query('INSERT INTO ventas2 SET ?', userData,
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
*/

userModel.updateVenta2Id = (userData, callback) => {
  if (connection) {

    const sql = `
      UPDATE ventas2 SET
      tipo= ${connection.escape(userData.tipo)},
      codtie= ${connection.escape(userData.codtie)},
      codart= ${connection.escape(userData.codart)},
      noserie= ${connection.escape(userData.noserie)},
      cantidad= ${connection.escape(userData.cantidad)},
      control= ${connection.escape(userData.control)},
      precio= ${connection.escape(userData.precio)},
      afectoigv= ${connection.escape(userData.afectoigv)},
      obsequio= ${connection.escape(userData.obsequio)},
      codcli= ${connection.escape(userData.codcli)},
      contrato= ${connection.escape(userData.contrato)},
      detalle= ${connection.escape(userData.detalle)},
      tipop= ${connection.escape(userData.tipop)},
      cajax= ${connection.escape(userData.cajax)},
      unicaj= ${connection.escape(userData.unicaj)},
      precio1= ${connection.escape(userData.precio1)},
      precio2= ${connection.escape(userData.precio2)},
      modificado= ${connection.escape(userData.modificado)},
      flag1= ${connection.escape(userData.flag1)},
      flag2= ${connection.escape(userData.flag2)},
      precio3= ${connection.escape(userData.precio3)},
      comision= ${connection.escape(userData.comision)},
      exceso= ${connection.escape(userData.exceso)},
      retener= ${connection.escape(userData.retener)},
      mdscto= ${connection.escape(userData.mdscto)},
      detalle1= ${connection.escape(userData.detalle1)},
      detalle2= ${connection.escape(userData.detalle2)},
      devolucion= ${connection.escape(userData.devolucion)},
      codlista= ${connection.escape(userData.codlista)},
      codnivel= ${connection.escape(userData.codnivel)},
      flagapp= ${connection.escape(userData.flagapp)},
      idventa1= ${connection.escape(userData.idventa1)},
      idproduct= ${connection.escape(userData.idproduct)},
      latitude= ${connection.escape(userData.latitude)},
      longitude= ${connection.escape(userData.longitude)},
      cntentrega= ${connection.escape(userData.cntentrega)},
      latituderep= ${connection.escape(userData.latituderep)},
      longituderep= ${connection.escape(userData.longituderep)},
      recep_ok= ${connection.escape(userData.recep_ok)},
      downnube= ${connection.escape(userData.downnube)},
      costo= ${connection.escape(userData.costo)}
      WHERE id = ${userData.id}`;
    
      console.log ('***1');
      console.log (sql);
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


userModel.updateVenta2ItemPedidovta = (userData, callback) => {
  if (connection) {

    const sql = `
      UPDATE ventas2 SET
      tipo= ${connection.escape(userData.tipo)},
      codtie= ${connection.escape(userData.codtie)},
      codart= ${connection.escape(userData.codart)},
      noserie= ${connection.escape(userData.noserie)},
      cantidad= ${connection.escape(userData.cantidad)},
      control= ${connection.escape(userData.control)},
      precio= ${connection.escape(userData.precio)},
      afectoigv= ${connection.escape(userData.afectoigv)},
      obsequio= ${connection.escape(userData.obsequio)},
      codcli= ${connection.escape(userData.codcli)},
      contrato= ${connection.escape(userData.contrato)},
      detalle= ${connection.escape(userData.detalle)},
      tipop= ${connection.escape(userData.tipop)},
      cajax= ${connection.escape(userData.cajax)},
      unicaj= ${connection.escape(userData.unicaj)},
      precio1= ${connection.escape(userData.precio1)},
      precio2= ${connection.escape(userData.precio2)},
      modificado= ${connection.escape(userData.modificado)},
      flag1= ${connection.escape(userData.flag1)},
      flag2= ${connection.escape(userData.flag2)},
      precio3= ${connection.escape(userData.precio3)},
      comision= ${connection.escape(userData.comision)},
      exceso= ${connection.escape(userData.exceso)},
      retener= ${connection.escape(userData.retener)},
      mdscto= ${connection.escape(userData.mdscto)},
      detalle1= ${connection.escape(userData.detalle1)},
      detalle2= ${connection.escape(userData.detalle2)},
      devolucion= ${connection.escape(userData.devolucion)},
      codlista= ${connection.escape(userData.codlista)},
      codnivel= ${connection.escape(userData.codnivel)},
      flagapp= ${connection.escape(userData.flagapp)},
      idventa1= ${connection.escape(userData.idventa1)},
      idproduct= ${connection.escape(userData.idproduct)},
      latitude= ${connection.escape(userData.latitude)},
      longitude= ${connection.escape(userData.longitude)},
      cntentrega= ${connection.escape(userData.cntentrega)},
      latituderep= ${connection.escape(userData.latituderep)},
      longituderep= ${connection.escape(userData.longituderep)},
      recep_ok= ${connection.escape(userData.recep_ok)},
      downnube= ${connection.escape(userData.downnube)},
      costo= ${connection.escape(userData.costo)}
      WHERE codempresa= ${connection.escape(userData.codempresa)} 
      and tipoloc= ${connection.escape(userData.tipoloc)}
      and codloc= ${connection.escape(userData.codloc)}
      and pedidovta= ${connection.escape(userData.pedidovta)} 
      and item= ${connection.escape(userData.item)} `;
      console.log(sql);
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

userModel.deleteVenta2Item = (id, callback) => {
  if (connection) {
    var sqlExists = `
      SELECT * FROM ventas2 WHERE id = ${connection.escape(id)}
    `;
    connection.query(sqlExists, (err, row) => {
      if (row) {
        var sql = `DELETE FROM ventas2 WHERE id=` + connection.escape(id);
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

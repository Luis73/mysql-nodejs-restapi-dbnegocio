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

userModel.getVentas1 = (callback) => {
  if (connection) {
    connection.query('SELECT * FROM ventas1 ORDER BY id',
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

userModel.getVentas1Id = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM ventas1 WHERE id=' + userData.id,
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

userModel.getVentas1Fecha = (userData, callback) => {
  if (connection) {
    var cad1 ='SELECT a.* from ventas1 a inner join sellers b on a.codempresa=b.codempresa '
    var cad2 ='and a.codven=b.codven  WHERE a.codempresa='+ userData.codempresa + ' and '
    var cad3 ='b.codven='+ userData.codven + ' and a.fecha='+ userData.fecha
    
    var res = cad1.concat(cad2);
    var ordensql = res.concat(cad3);

    //console.log( ordensql )

    connection.query(ordensql,
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

userModel.getVentas1Pedidovta = (userData, callback) => {
  if (connection) {
    var cad1 ='SELECT a.* from ventas1 a  WHERE a.codempresa='+ userData.codempresa + ' and '
    var cad2 =' a.tipoloc=' + userData.tipoloc + ' and codloc=' + userData.codloc +' and a.pedidovta='+ userData.pedidovta
    
    var ordensql = cad1.concat(cad2);
    
    console.log ( ordensql );

    connection.query(ordensql,
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

userModel.getVentas1Existe = (userData, callback) => {
  if (connection) {
    var cad1 ='SELECT count(*) as t1 from ventas1 a  WHERE a.codempresa='+ userData.codempresa + ' and '
    var cad2 =' a.tipoloc=' + userData.tipoloc + ' and codloc=' + userData.codloc +' and a.pedidovta='+ userData.pedidovta
    
    var ordensql = cad1.concat(cad2);
    
    console.log ( ordensql );

    connection.query(ordensql,
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

userModel.insertVenta1 = ( userData,  callback) => {
    
  if (connection) {
    connection.query( 'INSERT INTO ventas1 SET ?', userData ,
      (err, result , ) => {
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
userModel.insertVenta1 = (  userData, callback) => {
  if (connection) {
    connection.query('INSERT INTO ventas1 SET ?', userData,
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

userModel.updateVenta1 = (userData, callback) => {
  if (connection) {

    const sql = `
      UPDATE ventas1 SET
      fecha= ${connection.escape(userData.fecha)},
      codcli= ${connection.escape(userData.codcli)},
      emitira= ${connection.escape(userData.emitira)},
      codven= ${connection.escape(userData.codven)},
      codmod= ${connection.escape(userData.codmod)},
      codtipo1= ${connection.escape(userData.codtipo1)},
      numdoc1= ${connection.escape(userData.numdoc1)},
      pigv= ${connection.escape(userData.pigv)},
      tipo= ${connection.escape(userData.tipo)},
      codtie= ${connection.escape(userData.codtie)},
      contrato= ${connection.escape(userData.contrato)},
      codtipo2= ${connection.escape(userData.codtipo2)},
      numdoc2= ${connection.escape(userData.numdoc2)},
      oc= ${connection.escape(userData.oc)},
      moneda= ${connection.escape(userData.moneda)},
      montob= ${connection.escape(userData.montob)},
      montoi= ${connection.escape(userData.montoi)},
      dscto= ${connection.escape(userData.dscto)},
      montoneto1= ${connection.escape(userData.montoneto1)},
      montoneto1s= ${connection.escape(userData.montoneto1s)},
      montoneto1d= ${connection.escape(userData.montoneto1d)},
      montoneto2= ${connection.escape(userData.montoneto2)},
      fecpvcto= ${connection.escape(userData.fecpvcto)},
      cambio= ${connection.escape(userData.cambio)},
      nletras= ${connection.escape(userData.nletras)},
      cinicial= ${connection.escape(userData.cinicial)},
      monsepara= ${connection.escape(userData.monsepara)},
      mahora= ${connection.escape(userData.mahora)},
      mahoras= ${connection.escape(userData.mahoras)},
      mahorad= ${connection.escape(userData.mahorad)},
      sinicial= ${connection.escape(userData.sinicial)},
      feclei= ${connection.escape(userData.feclei)},
      nletras1= ${connection.escape(userData.nletras1)},
      mletras1= ${connection.escape(userData.mletras1)},
      nletras2= ${connection.escape(userData.nletras2)},
      mletras2= ${connection.escape(userData.mletras2)},
      nletras3= ${connection.escape(userData.nletras3)},
      mletras3= ${connection.escape(userData.mletras3)},
      obs1= ${connection.escape(userData.obs1)},
      obs2= ${connection.escape(userData.obs2)},
      recibo= ${connection.escape(userData.recibo)},
      karpa= ${connection.escape(userData.karpa)},
      impreso= ${connection.escape(userData.impreso)},
      procesado= ${connection.escape(userData.procesado)},
      correcto= ${connection.escape(userData.correcto)},
      obsequio= ${connection.escape(userData.obsequio)},
      anulado= ${connection.escape(userData.anulado)},
      pagoacta= ${connection.escape(userData.pagoacta)},
      obs3= ${connection.escape(userData.obs3)},
      esxmora= ${connection.escape(userData.esxmora)},
      ndespacho= ${connection.escape(userData.ndespacho)},
      modificado= ${connection.escape(userData.modificado)},
      flag1= ${connection.escape(userData.flag1)},
      flag2= ${connection.escape(userData.flag2)},
      fecreg= ${connection.escape(userData.fecreg)},
      horreg= ${connection.escape(userData.horreg)},
      norden= ${connection.escape(userData.norden)},
      fecent= ${connection.escape(userData.fecent)},
      abono= ${connection.escape(userData.abono)},
      saldo= ${connection.escape(userData.saldo)},
      gratuito= ${connection.escape(userData.gratuito)},
      separacion= ${connection.escape(userData.separacion)},
      esxrefina= ${connection.escape(userData.esxrefina)},
      esxgastos= ${connection.escape(userData.esxgastos)},
      motivo= ${connection.escape(userData.motivo)},
      codemi= ${connection.escape(userData.codemi)},
      emision1= ${connection.escape(userData.emision1)},
      emision2= ${connection.escape(userData.emision2)},
      emision3= ${connection.escape(userData.emision3)},
      codtipo3= ${connection.escape(userData.codtipo3)},
      numdoc3= ${connection.escape(userData.numdoc3)},
      fecdoc3= ${connection.escape(userData.fecdoc3)},
      fecvcto= ${connection.escape(userData.fecvcto)},
      tiponc= ${connection.escape(userData.tiponc)},
      tipond= ${connection.escape(userData.tipond)},
      noperacion= ${connection.escape(userData.noperacion)},
      incluncnd= ${connection.escape(userData.incluncnd)},
      enviosunat= ${connection.escape(userData.enviosunat)},
      sunat= ${connection.escape(userData.sunat)},
      revisadook= ${connection.escape(userData.revisadook)},
      ncok= ${connection.escape(userData.ncok)},
      ndok= ${connection.escape(userData.ndok)},
      ncndok= ${connection.escape(userData.ncndok)},
      asocdocu= ${connection.escape(userData.asocdocu)},
      pedidoord= ${connection.escape(userData.pedidoord)},
      flagapp= ${connection.escape(userData.flagapp)},
      idseller= ${connection.escape(userData.idseller)},
      idcustomer= ${connection.escape(userData.idcustomer)},
      imei= ${connection.escape(userData.imei)},
      latitude= ${connection.escape(userData.latitude)},
      longitude= ${connection.escape(userData.longitude)},
      entrega= ${connection.escape(userData.entrega)},
      monentrega= ${connection.escape(userData.monentrega)},
      monefectivo= ${connection.escape(userData.monefectivo)},
      control_id= ${connection.escape(userData.control_id)},
      latituderep= ${connection.escape(userData.latituderep)},
      longituderep= ${connection.escape(userData.longituderep)},
      recep_ok= ${connection.escape(userData.recep_ok)},
      entrega_fecha= ${connection.escape(userData.entrega_fecha)},
      downnube= ${connection.escape(userData.downnube)}
      WHERE codempresa= ${connection.escape(userData.codempresa)} 
      and tipoloc= ${connection.escape(userData.tipoloc)}
      and codloc= ${connection.escape(userData.codloc)}
      and pedidovta= ${connection.escape(userData.pedidovta)}`;      
      
      console.log('updateVenta1');
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


userModel.updateVenta1Pedidovta = (userData, callback) => {
  if (connection) {

    const sql = `
      UPDATE ventas1 SET
      tipoloc= ${connection.escape(userData.tipoloc)},
      codloc= ${connection.escape(userData.codloc)},
      fecha= ${connection.escape(userData.fecha)},
      codcli= ${connection.escape(userData.codcli)},
      emitira= ${connection.escape(userData.emitira)},
      codven= ${connection.escape(userData.codven)},
      codmod= ${connection.escape(userData.codmod)},
      codtipo1= ${connection.escape(userData.codtipo1)},
      numdoc1= ${connection.escape(userData.numdoc1)},
      pigv= ${connection.escape(userData.pigv)},
      tipo= ${connection.escape(userData.tipo)},
      codtie= ${connection.escape(userData.codtie)},
      contrato= ${connection.escape(userData.contrato)},
      codtipo2= ${connection.escape(userData.codtipo2)},
      numdoc2= ${connection.escape(userData.numdoc2)},
      oc= ${connection.escape(userData.oc)},
      moneda= ${connection.escape(userData.moneda)},
      montob= ${connection.escape(userData.montob)},
      montoi= ${connection.escape(userData.montoi)},
      dscto= ${connection.escape(userData.dscto)},
      montoneto1= ${connection.escape(userData.montoneto1)},
      montoneto1s= ${connection.escape(userData.montoneto1s)},
      montoneto1d= ${connection.escape(userData.montoneto1d)},
      montoneto2= ${connection.escape(userData.montoneto2)},
      fecpvcto= ${connection.escape(userData.fecpvcto)},
      cambio= ${connection.escape(userData.cambio)},
      nletras= ${connection.escape(userData.nletras)},
      cinicial= ${connection.escape(userData.cinicial)},
      monsepara= ${connection.escape(userData.monsepara)},
      mahora= ${connection.escape(userData.mahora)},
      mahoras= ${connection.escape(userData.mahoras)},
      mahorad= ${connection.escape(userData.mahorad)},
      sinicial= ${connection.escape(userData.sinicial)},
      feclei= ${connection.escape(userData.feclei)},
      nletras1= ${connection.escape(userData.nletras1)},
      mletras1= ${connection.escape(userData.mletras1)},
      nletras2= ${connection.escape(userData.nletras2)},
      mletras2= ${connection.escape(userData.mletras2)},
      nletras3= ${connection.escape(userData.nletras3)},
      mletras3= ${connection.escape(userData.mletras3)},
      obs1= ${connection.escape(userData.obs1)},
      obs2= ${connection.escape(userData.obs2)},
      recibo= ${connection.escape(userData.recibo)},
      karpa= ${connection.escape(userData.karpa)},
      impreso= ${connection.escape(userData.impreso)},
      procesado= ${connection.escape(userData.procesado)},
      correcto= ${connection.escape(userData.correcto)},
      obsequio= ${connection.escape(userData.obsequio)},
      anulado= ${connection.escape(userData.anulado)},
      pagoacta= ${connection.escape(userData.pagoacta)},
      obs3= ${connection.escape(userData.obs3)},
      esxmora= ${connection.escape(userData.esxmora)},
      ndespacho= ${connection.escape(userData.ndespacho)},
      modificado= ${connection.escape(userData.modificado)},
      flag1= ${connection.escape(userData.flag1)},
      flag2= ${connection.escape(userData.flag2)},
      fecreg= ${connection.escape(userData.fecreg)},
      horreg= ${connection.escape(userData.horreg)},
      norden= ${connection.escape(userData.norden)},
      fecent= ${connection.escape(userData.fecent)},
      abono= ${connection.escape(userData.abono)},
      saldo= ${connection.escape(userData.saldo)},
      gratuito= ${connection.escape(userData.gratuito)},
      separacion= ${connection.escape(userData.separacion)},
      esxrefina= ${connection.escape(userData.esxrefina)},
      esxgastos= ${connection.escape(userData.esxgastos)},
      motivo= ${connection.escape(userData.motivo)},
      codemi= ${connection.escape(userData.codemi)},
      emision1= ${connection.escape(userData.emision1)},
      emision2= ${connection.escape(userData.emision2)},
      emision3= ${connection.escape(userData.emision3)},
      codtipo3= ${connection.escape(userData.codtipo3)},
      numdoc3= ${connection.escape(userData.numdoc3)},
      fecdoc3= ${connection.escape(userData.fecdoc3)},
      fecvcto= ${connection.escape(userData.fecvcto)},
      tiponc= ${connection.escape(userData.tiponc)},
      tipond= ${connection.escape(userData.tipond)},
      noperacion= ${connection.escape(userData.noperacion)},
      incluncnd= ${connection.escape(userData.incluncnd)},
      enviosunat= ${connection.escape(userData.enviosunat)},
      sunat= ${connection.escape(userData.sunat)},
      revisadook= ${connection.escape(userData.revisadook)},
      ncok= ${connection.escape(userData.ncok)},
      ndok= ${connection.escape(userData.ndok)},
      ncndok= ${connection.escape(userData.ncndok)},
      asocdocu= ${connection.escape(userData.asocdocu)},
      pedidoord= ${connection.escape(userData.pedidoord)},
      flagapp= ${connection.escape(userData.flagapp)},
      idseller= ${connection.escape(userData.idseller)},
      idcustomer= ${connection.escape(userData.idcustomer)},
      imei= ${connection.escape(userData.imei)},
      latitude= ${connection.escape(userData.latitude)},
      longitude= ${connection.escape(userData.longitude)},
      entrega= ${connection.escape(userData.entrega)},
      monentrega= ${connection.escape(userData.monentrega)},
      monefectivo= ${connection.escape(userData.monefectivo)},
      control_id= ${connection.escape(userData.control_id)},
      latituderep= ${connection.escape(userData.latituderep)},
      longituderep= ${connection.escape(userData.longituderep)},
      recep_ok= ${connection.escape(userData.recep_ok)},
      entrega_fecha= ${connection.escape(userData.entrega_fecha)},
      downnube= ${connection.escape(userData.downnube)}
      WHERE codempresa= ${connection.escape(userData.codempresa)} and pedidovta= ${connection.escape(userData.pedidovta)}`;

      console.log('updateVenta1Pedidovta');
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


userModel.deleteVenta1 = (id, callback) => {
  if (connection) {
    var sqlExists = `
      SELECT * FROM ventas1 WHERE id = ${connection.escape(id)}
    `;
    connection.query(sqlExists, (err, row) => {
      if (row) {
        var sql = `DELETE FROM ventas1 WHERE id=` + connection.escape(id);
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

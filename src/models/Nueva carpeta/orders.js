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

userModel.getOrders = (callback) => {
  if (connection) {
    connection.query('SELECT * FROM Orders ORDER BY id',
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

userModel.getOrderId = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM orders WHERE id=' + userData.id,
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

userModel.getMaxDownload = (userData, callback) => {
  if (connection) {
    console.log ('SELECT IFNULL(max(secuDownloaded),0) as t1 FROM orders WHERE codempresa=' + userData.codempresa + ' and DATE_FORMAT(dateorder,\'%Y%m%d\')=' +  userData.fecorden)
    connection.query('SELECT IFNULL(max(secuDownloaded),0) as t1 FROM orders WHERE codempresa=' + userData.codempresa + ' and DATE_FORMAT(dateorder,\'%Y%m%d\')=' +  userData.fecorden,
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


userModel.getOrderFecha = (userData, callback) => {
  if (connection) {
    

    var cad1 ='SELECT a.id, a.app_id, a.dateorder, a.customer_id, a.seller_id, a.datedelivery, a.paymenttype, a.receiptType, a.imei, a.latitude, a.longitude, a.semaphore,'
    var cad2 ='a.PedidoVta, a.PedidoPed, a.statusDownloaded, a.orderInterna, a.secuDownloaded, if(anulado=0,\'.f.\',\'.t.\') as anulado , if(validado=0,\'.f.\',\'.t.\') as validado, a.created_at, a.updated_at, a.doc_fecha, '
    var cad3 ='a.doc_codtipo1, a.doc_emision1, a.doc_numdoc1, a.doc_cntventa, a.doc_cntorder, a.codempresa, '
    var cad4 ='b.codcli, c.Codven, a.id as idasociado, \' \' as esdoble, 0 as okDoble, \'                                       \' as Ordasocia  from orders a '
    var cad5 =' inner join customers b On b.id = a.customer_id   inner join sellers c on '
    var cad6 =' a.seller_id=c.id  WHERE date_format(a.dateorder,\'%Y%m%d\') = \''+ userData.fecorden + '\'  '
    var cad7 =' and a.seller_id in ( select id from sellers where codempresa = \''+ userData.codempresa +'\' ) and a.statusDownloaded = \'1\' ; '
    
    var res = cad1.concat(cad2).concat(cad3).concat(cad4).concat(cad5).concat(cad6).concat(cad7);
    var ordensql = res;

    console.log( 'getOrderFecha' )
    console.log( ordensql )

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

userModel.getOrderFechaDownload = (userData, callback) => {
  if (connection) {
    

    var cad1 ='SELECT a.id, a.app_id, a.dateorder, a.customer_id, a.seller_id, a.datedelivery, a.paymenttype, a.receiptType, a.imei, a.latitude, a.longitude, a.semaphore,'
    var cad2 ='a.PedidoVta, a.PedidoPed, a.statusDownloaded, a.orderInterna, a.secuDownloaded, if(anulado=0,\'.f.\',\'.t.\') as anulado , if(validado=0,\'.f.\',\'.t.\') as validado, a.created_at, a.updated_at, a.doc_fecha, '
    var cad3 ='a.doc_codtipo1, a.doc_emision1, a.doc_numdoc1, a.doc_cntventa, a.doc_cntorder, a.codempresa, '
    var cad4 ='b.codcli, c.Codven, a.id as idasociado, \' \' as esdoble, 0 as okDoble, \'                                       \' as Ordasocia  from orders a '
    var cad5 =' inner join customers b On b.id = a.customer_id   inner join sellers c on '
    var cad6 =' a.seller_id=c.id  WHERE date_format(a.dateorder,\'%Y%m%d\') = \''+ userData.fecorden + '\'  '
    var cad7 =' and a.seller_id in ( select id from sellers where codempresa = \''+ userData.codempresa +'\' ) and a.statusDownloaded = \''+ userData.ndownload + '\' ; '
    
    var res = cad1.concat(cad2).concat(cad3).concat(cad4).concat(cad5).concat(cad6).concat(cad7);
    var ordensql = res;

    console.log( 'getOrderFechaDownload' )
    console.log( ordensql )

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



userModel.insertOrderItemNormal = (  userDataC,   userDataD,  callback) => {
  if (connection) {
    connection.query('INSERT INTO orders SET ?', userDataC,
      (err, result) => {
        if (err) {
          throw err;
        } else {
          callback(null, {'insertId': result.insertId})
        }
      }
    )


    connection.query('INSERT INTO orders SET ?', userDataD,
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

userModel.insertOrderItemBatch = (  userData, callback) => {
  if (connection) {
    connection.query('INSERT INTO orders SET ?', userData,
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


userModel.insertOrder = (  userData, callback) => {
  if (connection) {
    connection.query('INSERT INTO orders SET ?', userData,
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

userModel.updateOrder = (userData, callback) => {
  if (connection) {

    const sql = `
      UPDATE orders SET
      app_id= ${connection.escape(userData.app_id)},
      dateorder= ${connection.escape(userData.dateorder)},
      customer_id= ${connection.escape(userData.customer_id)},
      seller_id= ${connection.escape(userData.seller_id)},
      datedelivery= ${connection.escape(userData.datedelivery)},
      paymenttype= ${connection.escape(userData.paymenttype)},
      receiptType= ${connection.escape(userData.receiptType)},
      imei= ${connection.escape(userData.imei)},
      latitude= ${connection.escape(userData.latitude)},
      longitude= ${connection.escape(userData.longitude)},
      semaphore= ${connection.escape(userData.semaphore)},
      PedidoVta= ${connection.escape(userData.PedidoVta)},
      PedidoPed= ${connection.escape(userData.PedidoPed)},
      statusDownloaded= ${connection.escape(userData.statusDownloaded)},
      orderInterna= ${connection.escape(userData.orderInterna)},
      secuDownloaded= ${connection.escape(userData.secuDownloaded)},
      anulado= ${connection.escape(userData.anulado)},
      validado= ${connection.escape(userData.validado)},
      updated_at= ${connection.escape(userData.updated_at)},
      doc_fecha= ${connection.escape(userData.doc_fecha)},
      doc_codtipo1= ${connection.escape(userData.doc_codtipo1)},
      doc_emision1= ${connection.escape(userData.doc_emision1)},
      doc_numdoc1= ${connection.escape(userData.doc_numdoc1)},
      doc_cntventa= ${connection.escape(userData.doc_cntventa)},
      doc_cntorder= ${connection.escape(userData.doc_cntorder)},
      codempresa= ${connection.escape(userData.codempresa)}
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

userModel.updateOrderStatus = (userData, callback) => {
  if (connection) {

    const sql = `
      UPDATE orders SET codempresa= \'${userData.codempresa}\', statusDownloaded= ${userData.statusDownloaded}, secuDownloaded= ${userData.secuDownloaded} WHERE DATE_FORMAT(dateorder,'%Y%m%d')=\'${userData.fecvta}\' and id = ${userData.id}`;
      console.log ( 'updateOrderStatus' );
      console.log ( sql );
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



userModel.deleteOrder = (id, callback) => {
  if (connection) {
    var sqlExists = `
      SELECT * FROM orders WHERE id = ${connection.escape(id)}
    `;
    connection.query(sqlExists, (err, row) => {
      if (row) {
        var sql = `DELETE FROM orders WHERE id=` + connection.escape(id);
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

userModel.updateOrderCodEmpresa = (userData, callback) => {
  if (connection) {
    const sql = `
      UPDATE orders SET  codempresa= ${connection.escape(userData.codempresa)} WHERE seller_id in ( select id from sellers where codempresa=${userData.codempresa} ) and  codempresa='001' `;
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


module.exports = userModel;

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

userModel.getOrders = (userData, callback) => {
  if (connection) {
    connection.query('select a.* from orders a inner join sellers b on a.seller_id=b.id and a.codempresa=b.codempresa where b.codempresa=' + userData.codempresa + ' and b.codven=' +  userData.codven ,
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
  console.log( '22222');
  console.log( userData.id);
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

userModel.getOrderFecha = (userData, callback) => {
  if (connection) {
    
    var cad1 ='SELECT a.*, b.codcli, c.Codven, a.id as idasociado, \' \' as esdoble, 0 as okDoble, \'                                       \' as Ordasocia  from orders a '
    var cad2 =' inner join customers b On b.id = a.customer_id   inner join sellers c on c.codempresa=a.codempresa   '
    var cad3 =' and a.seller_id=c.id  WHERE a.codempresa='+ userData.codempresa 
    //var cad4 =' and date_format(a.dateorder,\'%Y%m%d\')='+ userData.fecorden +' and a.statusDownloaded=1; '
    var cad4 =' and date_format(a.dateorder,\'%Y%m%d\')='+ userData.fecorden +' ; '
    
    var res = cad1.concat(cad2).concat(cad3);
    var ordensql = res.concat(cad4);

    console.log( 'hola')
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

userModel.getData = (userData, callback) => {
  if (connection) {
    connection.query('select a.* from orders a inner join sellers b on a.seller_id=b.id and a.codempresa=b.codempresa where b.codempresa=' + userData.codempresa + ' and b.codven=' +  userData.codven ,
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




module.exports = userModel;

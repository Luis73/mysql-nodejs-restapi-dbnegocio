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

userModel.getOrderItems = (callback) => {
  if (connection) {
    connection.query('SELECT * FROM order_items ORDER BY id',
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

userModel.getOrderDetailsId = (userData, callback) => {
  if (connection) {
    
    var cad1 ='select a.id, a.order_id, a.product_id, a.quantity, a.price, a.typeunit, a.boxby, a.typeprice, a.pricetlist, a.codlevel, a.levelrangefrom, a.levelrangeto, a.PedidoVta, a.PedidoPed, a.created_at, a.updated_at, b.Codproduct from order_items a inner join products b on a.product_id=b.id inner join  orders c '
    var cad2 =' on  a.order_id=c.id  inner join sellers d on c.seller_id=d.id  '
    var cad3 =' where  date_format(c.dateorder,\'%Y%m%d\') = \''+ userData.fecorden + '\' and c.statusDownloaded = \'1\' ';
    var cad4 =' and c.seller_id in ( select id from sellers where codempresa=\''+ userData.codempresa +'\' ) ;'

    var ordensql = cad1.concat(cad2).concat(cad3).concat(cad4);

    console.log( 'getOrderDetailsId' )
    console.log( ordensql )
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


userModel.getOrderDetailsIdDownload = (userData, callback) => {
  if (connection) {
    
    var cad1 ='select a.id, a.order_id, a.product_id, a.quantity, a.price, a.typeunit, a.boxby, a.typeprice, a.pricetlist, a.codlevel, a.levelrangefrom, a.levelrangeto, a.PedidoVta, a.PedidoPed, a.created_at, a.updated_at, b.Codproduct from order_items a inner join products b on a.product_id=b.id inner join  orders c '
    //var cad2 =' on b.codempresa=c.codempresa and a.order_id=c.id  inner join sellers d on d.codempresa=c.codempresa and c.seller_id=d.id '
    var cad2 =' on  a.order_id=c.id  inner join sellers d on c.seller_id=d.id  '
    //var cad3 =' where  d.codempresa='+ userData.codempresa + ' and date_format(c.dateorder,\'%Y%m%d\')='+ userData.fecorden ; //+ ' and c.statusDownloaded=1 ';
    var cad3 =' where  date_format(c.dateorder,\'%Y%m%d\') = \''+ userData.fecorden + '\' and c.statusDownloaded = \''+ userData.ndownload + '\' ';
    var cad4 =' and c.seller_id in ( select id from sellers where codempresa=\''+ userData.codempresa +'\' ) ;'

    var ordensql = cad1.concat(cad2).concat(cad3).concat(cad4);
    console.log( 'getOrderDetailsIdDownload' )
    console.log( ordensql )
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


userModel.insertOrderItem = (  userData, callback) => {
  if (connection) {
    connection.query('INSERT INTO order_items SET ?', userData,
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

userModel.updateOrderItem = (userData, callback) => {
  if (connection) {

    const sql = `
      UPDATE order_items SET
      order_id= ${connection.escape(userData.order_id)},
      product_id= ${connection.escape(userData.product_id)},
      quantity= ${connection.escape(userData.quantity)},
      price= ${connection.escape(userData.price)},
      typeunit= ${connection.escape(userData.typeunit)},
      boxby= ${connection.escape(userData.boxby)},
      typeprice= ${connection.escape(userData.typeprice)},
      pricetlist= ${connection.escape(userData.pricetlist)},
      codlevel= ${connection.escape(userData.codlevel)},
      levelrangefrom= ${connection.escape(userData.levelrangefrom)},
      levelrangeto= ${connection.escape(userData.levelrangeto)},
      PedidoVta= ${connection.escape(userData.PedidoVta)},
      PedidoPed= ${connection.escape(userData.PedidoPed)},
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

userModel.deleteOrderItem = (id, callback) => {
  if (connection) {
    var sqlExists = `
      SELECT * FROM order_items WHERE id = ${connection.escape(id)}
    `;
    connection.query(sqlExists, (err, row) => {
      if (row) {
        var sql = `DELETE FROM order_items WHERE id=` + connection.escape(id);
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

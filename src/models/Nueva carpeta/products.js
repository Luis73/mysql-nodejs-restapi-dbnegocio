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

userModel.getProducts = (userData, callback) => {

  //connection.query('SELECT * FROM products WHERE control_id=' + userData.controlid + ' and  codempresa=' + userData.codempresa  ,

  if (connection) {
    connection.query('SELECT * FROM products WHERE  codempresa=' + userData.codempresa  ,
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

userModel.getProductControlId = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM products WHERE control_id=' + userData.control_id,
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

userModel.getProductRange = (userData, callback) => {
  //connection.query('SELECT * FROM products WHERE (control_id >= ' + userData.controlIdFrom + ' and control_id <=' + userData.controlIdTo +' ) and codempresa=' + userData.codEmpresa ,

  if (connection) {
    connection.query('SELECT * FROM products WHERE codempresa=' + userData.codEmpresa ,
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

userModel.getProductId = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM products WHERE id=' + userData.id,
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

userModel.insertProduct = (  userData, callback) => {
  if (connection) {
    connection.query('INSERT INTO products SET ?', userData,
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

userModel.updateProduct = (userData, callback) => {
  if (connection) {

    const sql = `
      UPDATE products SET
      control_id= ${connection.escape(userData.control_id)},
      codempresa= ${connection.escape(userData.codempresa)},
      codlinea= ${connection.escape(userData.codlinea)},
      name= ${connection.escape(userData.name)},
      fecinivig= ${connection.escape(userData.fecinivig)},
      fecfinvig= ${connection.escape(userData.fecfinvig)},
      priceone= ${connection.escape(userData.priceone)},
      pricetwo= ${connection.escape(userData.pricetwo)},
      pricethree= ${connection.escape(userData.pricethree)},
      pricerangenameone= ${connection.escape(userData.pricerangenameone)},
      pricerangefromone= ${connection.escape(userData.pricerangefromone)},
      pricerangetoone= ${connection.escape(userData.pricerangetoone)},
      pricevaluefromone= ${connection.escape(userData.pricevaluefromone)},
      pricevaluetoone= ${connection.escape(userData.pricevaluetoone)},
      pricerangenametwo= ${connection.escape(userData.pricerangenametwo)},
      pricerangefromtwo= ${connection.escape(userData.pricerangefromtwo)},
      pricerangetotwo= ${connection.escape(userData.pricerangetotwo)},
      pricevaluefromtwo= ${connection.escape(userData.pricevaluefromtwo)},
      pricevaluetotwo= ${connection.escape(userData.pricevaluetotwo)},
      pricerangenamethree= ${connection.escape(userData.pricerangenamethree)},
      pricerangefromthree= ${connection.escape(userData.pricerangefromthree)},
      pricerangetothree= ${connection.escape(userData.pricerangetothree)},
      pricevaluefromthree= ${connection.escape(userData.pricevaluefromthree)},
      pricevaluetothree= ${connection.escape(userData.pricevaluetothree)},
      pricerangenamefour= ${connection.escape(userData.pricerangenamefour)},
      pricerangenamefour= ${connection.escape(userData.pricerangenamefour)},
      pricerangetofour= ${connection.escape(userData.pricerangetofour)},
      pricevaluefromfour= ${connection.escape(userData.pricevaluefromfour)},
      pricevaluetofour= ${connection.escape(userData.pricevaluetofour)},
      pricerangenamefive= ${connection.escape(userData.pricerangenamefive)},
      pricerangefromfive= ${connection.escape(userData.pricerangefromfive)},
      pricerangetofive= ${connection.escape(userData.pricerangetofive)},
      pricevaluefromfive= ${connection.escape(userData.pricevaluefromfive)},
      pricevaluetofive= ${connection.escape(userData.pricevaluetofive)},
      boxby= ${connection.escape(userData.boxby)},
      typeunit= ${connection.escape(userData.typeunit)},
      priceoflist= ${connection.escape(userData.priceoflist)},
      flagprice= ${connection.escape(userData.flagprice)},
      fecuv= ${connection.escape(userData.fecuv)},
      flagcombo= ${connection.escape(userData.flagcombo)},
      codsunat= ${connection.escape(userData.codsunat)},
      monflete= ${connection.escape(userData.monflete)}
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

userModel.updateProductCodart = (userData, callback) => {
  if (connection) {

    const sql = `
      UPDATE products SET
      control_id= ${connection.escape(userData.control_id)},
      codempresa= ${connection.escape(userData.codempresa)},
      codlinea= ${connection.escape(userData.codlinea)},
      name= ${connection.escape(userData.name)},
      fecinivig= ${connection.escape(userData.fecinivig)},
      fecfinvig= ${connection.escape(userData.fecfinvig)},
      priceone= ${connection.escape(userData.priceone)},
      pricetwo= ${connection.escape(userData.pricetwo)},
      pricethree= ${connection.escape(userData.pricethree)},
      pricerangenameone= ${connection.escape(userData.pricerangenameone)},
      pricerangefromone= ${connection.escape(userData.pricerangefromone)},
      pricerangetoone= ${connection.escape(userData.pricerangetoone)},
      pricevaluefromone= ${connection.escape(userData.pricevaluefromone)},
      pricevaluetoone= ${connection.escape(userData.pricevaluetoone)},
      pricerangenametwo= ${connection.escape(userData.pricerangenametwo)},
      pricerangefromtwo= ${connection.escape(userData.pricerangefromtwo)},
      pricerangetotwo= ${connection.escape(userData.pricerangetotwo)},
      pricevaluefromtwo= ${connection.escape(userData.pricevaluefromtwo)},
      pricevaluetotwo= ${connection.escape(userData.pricevaluetotwo)},
      pricerangenamethree= ${connection.escape(userData.pricerangenamethree)},
      pricerangefromthree= ${connection.escape(userData.pricerangefromthree)},
      pricerangetothree= ${connection.escape(userData.pricerangetothree)},
      pricevaluefromthree= ${connection.escape(userData.pricevaluefromthree)},
      pricevaluetothree= ${connection.escape(userData.pricevaluetothree)},
      pricerangenamefour= ${connection.escape(userData.pricerangenamefour)},
      pricerangenamefour= ${connection.escape(userData.pricerangenamefour)},
      pricerangetofour= ${connection.escape(userData.pricerangetofour)},
      pricevaluefromfour= ${connection.escape(userData.pricevaluefromfour)},
      pricevaluetofour= ${connection.escape(userData.pricevaluetofour)},
      pricerangenamefive= ${connection.escape(userData.pricerangenamefive)},
      pricerangefromfive= ${connection.escape(userData.pricerangefromfive)},
      pricerangetofive= ${connection.escape(userData.pricerangetofive)},
      pricevaluefromfive= ${connection.escape(userData.pricevaluefromfive)},
      pricevaluetofive= ${connection.escape(userData.pricevaluetofive)},
      boxby= ${connection.escape(userData.boxby)},
      typeunit= ${connection.escape(userData.typeunit)},
      priceoflist= ${connection.escape(userData.priceoflist)},
      flagprice= ${connection.escape(userData.flagprice)},
      fecuv= ${connection.escape(userData.fecuv)},
      updated_at= ${connection.escape(userData.updated_at)},
      flagcombo= ${connection.escape(userData.flagcombo)},
      codsunat= ${connection.escape(userData.codsunat)},
      monflete= ${connection.escape(userData.monflete)}
      WHERE codempresa = ${userData.codempresa} and codproduct =${userData.codart}`;

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


userModel.deleteProduct = (id, callback) => {
  if (connection) {
    var sqlExists = `
      SELECT * FROM Products WHERE id = ${connection.escape(id)}
    `;
    connection.query(sqlExists, (err, row) => {
      if (row) {
        var sql = `DELETE FROM Products WHERE id=` + connection.escape(id);
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

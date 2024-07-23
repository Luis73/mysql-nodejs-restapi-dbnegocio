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

userModel.getSeller = (callback) => {
  if (connection) {
    connection.query('SELECT * FROM sellers ',
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

userModel.getIdSeller = ( userData, callback) => {
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

userModel.getLoginSeller = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM sellers WHERE imei=' + userData.imei,
      (err, rows) => {
        if (err) {
          throw err
        }
        else {
          callback(null, rows[0]);
        }
      }
    )
       

  }
  
};

userModel.getRangeSeller = (  userData, callback) => {
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

module.exports = userModel;

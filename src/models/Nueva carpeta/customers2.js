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

userModel.getData = (userData, callback) => {
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


userModel.getControlId = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM customers WHERE control_id=' + userData.control_id +' and codven=' + userData.codven,
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

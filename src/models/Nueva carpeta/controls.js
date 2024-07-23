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

userModel.get = (userData, callback) => {
   
    if (connection) {
      connection.query('SELECT  ifnull( max(id), 0)  as id FROM controls WHERE tabla= \'' + userData.tabla +'\'  order by id desc',
        (err, rows) => {
          if (err) {
            throw err
          }
          else {
            callback(null, rows[0] );
          }
        }
      )
    }
    
  };

  userModel.getAll = (userData, callback) => {
    if (connection) {
      connection.query('SELECT * FROM controls WHERE tabla=\'' + userData.tabla +'\' order by id desc',
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

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

userModel.getUsers = (callback) => {
  if (connection) {
    connection.query('SELECT * FROM users ORDER BY id',
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

userModel.getUserId = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM users WHERE id=' + userData.id,
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

userModel.insertUser = (  userData, callback) => {
  if (connection) {
    connection.query('INSERT INTO users SET ?', userData,
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

userModel.updateUser = (userData, callback) => {
  if (connection) {

    const sql = `
      UPDATE users SET
      name = ${connection.escape(userData.name)},
      email = ${connection.escape(userData.email)},
      email_verified_at = ${connection.escape(userData.email_verified_at)},
      password = ${connection.escape(userData.password)},
      api_token = ${connection.escape(userData.api_token)},
      reg_token = ${connection.escape(userData.reg_token)},
      remember_token = ${connection.escape(userData.remember_token)},
      updated_at = ${connection.escape(userData.updated_at)}
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

userModel.deleteUser = (id, callback) => {
  if (connection) {
    var sqlExists = `
      SELECT * FROM users WHERE id = ${connection.escape(id)}
    `;
    connection.query(sqlExists, (err, row) => {
      if (row) {
        var sql = `DELETE FROM users WHERE id=` + connection.escape(id);
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

const UserModel = require('../models/users');

function singIn(req, res){
  user.find( {email: req.body.email} , (err, user) =>{
     if (err) return res.status(500).send( {message:err})
     if (!user) return res.status(400).send({mesage: 'No existe el usuario'})

     req.user = user
     res.status(200).send({
       message : 'Te has logueado correctamente',
       token: ServiceWorker.createToken(user)
     })
  })
} 

module.exports = app => {

  app.get('/users', (req, res) => {
    let username = req.body.username ;
    let password = req.params.password;

    console.warn(username);
    console.log('Username: ${username}' );
    console.warn('Password: ${password}' );
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds

    UserModel.getUsers((err, data) => {
      res.status(200).json(data);
    });
  });

  app.get('/users/:id', (req, res) => {
    const userData = {
      id: req.params.id,
    };    
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
        
    UserModel.getUserId( userData, function (err, data)  {
      res.status(200).json(data);
    });

  });

  app.post('/users', (req, res) => {
    var userData = {
      id: null,
      name: req.body.name,
      email: req.body.email,
      email_verified_at : req.body.email_verified_at ,
      password: req.body.password,
      api_token: req.body.api_token,
      reg_token: req.body.reg_token,
      remember_token: req.body.remember_token,
      created_at: null,
      updated_at: null
    };
    
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    UserModel.insertUser(userData, (err, data) => {
      if (data && data.insertId) {
        res.status(200).json({
          success: true,
          msg: "Inserted a new user",
          data: data
        });
        // res.redirect('/users/' + data.insertId);
      } else {
        res.status(500).json({
          success: false,
          msg: "Error"
        });
      }
    });
  });

  app.put('/users/:id', (req, res) => {
    const userData = {
      id: req.params.id,
      name: req.body.name,
      email: req.body.email,
      email_verified_at : req.body.email_verified_at ,
      password: req.body.password,
      api_token: req.body.api_token,
      reg_token: req.body.reg_token,
      remember_token: req.body.remember_token,
      created_at: null,
      updated_at: null
    };

    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    UserModel.updateUser(userData, function (err, data) {
      if (data && data.msg) {
        res.status(200).json({data});
      } else {
        res.status(500).json({
          success: false,
          msg: 'Error'
        });
      }
    });
  });

  app.delete('/users/:id', (req, res) => {
    var id = req.params.id;
    UserModel.deleteUser(id, (err, data) =>  {
      if (data && data.msg === 'deleted' || data.msg == 'not Exists') {
        res.json({
          success: 'true',
          data
        });
      } else {
        res.status(500).json({
          msg: 'Error'
        });
      }
    });
  });
};

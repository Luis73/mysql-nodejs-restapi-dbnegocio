const UserModel = require('../models/controls');
 
module.exports = app => {

  app.get('/api/controls', (req, res) => {
    const userData = {
      tabla: req.query.tabla,
      
    };    
      console.log( req.query.tabla );
      req.setTimeout(5000); // Set request timeout to 5 seconds
      res.setTimeout(5000); // Set response timeout to 5 seconds

      UserModel.get( userData, function (err, data)  {
        res.status(200).json(data);
      });

    });

  app.get('/api/controls/all', (req, res) => {
    const userData = {
        tabla: req.query.tabla,
    };    

    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds

    UserModel.getAll( userData, function (err, data)  {
      res.status(200).json(data);
    });

  });
    
  
};

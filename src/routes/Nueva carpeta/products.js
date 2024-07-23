const UserModel = require('../models/products2');

module.exports = app => {

  app.get('/api/products2', (req, res) => {
    const userData = {
      control_id: req.query.control_id,
      codempresa: req.query.codempresa,
    };     
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    console.log( req.query.control_id );
    UserModel.getControlId ( userData, function (err, data)  {
        res.status(200).json(data);
    });

    });

  app.get('/api/products2/range', (req, res) => {
    const userData = {
        codempresa: req.query.codempresa,
      };    
        
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    UserModel.getData( userData, function (err, data)  {
      res.status(200).json(data);
    });

  });
    

};

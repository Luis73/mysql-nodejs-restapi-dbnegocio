const UserModel = require('../models/customers2');
 
module.exports = app => {

  app.get('/api/customers2', (req, res) => {
    const userData = {
        control_id: req.query.control_id,
        codven: req.query.codven,
      };    
      req.setTimeout(5000); // Set request timeout to 5 seconds
      res.setTimeout(5000); // Set response timeout to 5 seconds

      console.log( req.query.control_id );
      UserModel.getControlId ( userData, function (err, data)  {
        res.status(200).json(data);
      });

    });

  app.get('/api/customers2/range', (req, res) => {
    const userData = {
        codempresa: req.query.codempresa,
        codven: req.query.codven,
      };    

    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    
    UserModel.getData( userData, function (err, data)  {
      res.status(200).json(data);
    });

  });
    
  
};

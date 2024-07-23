const UserModel = require('../models/sellers2');

module.exports = app => {

  app.get('/api/sellers', (req, res) => {
    const userData = {
        id: req.query.id,
      };    
      console.log( req.query.id );
      req.setTimeout(5000); // Set request timeout to 5 seconds
      res.setTimeout(5000); // Set response timeout to 5 seconds
      UserModel.getIdSeller( userData, function (err, data)  {
        res.status(200).json(data);
      });

  }); 

  app.get('/api/sellers/login', (req, res) => {
    const userData = {
        imei: req.query.imei,
      };    
console.log('uno');        
      req.setTimeout(5000); // Set request timeout to 5 seconds
      res.setTimeout(5000); // Set response timeout to 5 seconds
      UserModel.getLoginSeller( userData, function (err, data)  {
        res.status(200).json(data);
      });
  });

  app.get('/api/sellers/range', (req, res) => {
        const userData = {
            id: req.query.id,
          };    
            
        req.setTimeout(5000); // Set request timeout to 5 seconds
        res.setTimeout(5000); // Set response timeout to 5 seconds
        UserModel.getRangeSeller( userData, function (err, data)  {
          res.status(200).json(data);
        });
    
  });

};

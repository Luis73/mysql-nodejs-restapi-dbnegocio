const UserModel = require('../models/products');

module.exports = app => {

  app.get('/api/products', (req, res) => {

    const userData = {
      controlid: req.query.controlId,
      codempresa: req.query.codEmpresa,
    };  
    console.log ('Productos');
    console.log (req.params.controlId);
    console.log (req.body.controlId);
    console.log (req.query.controlId);
    console.log (req.query.codEmpresa);
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds

    UserModel.getProducts( userData, function (err, data)  {
      res.status(200).json(data);
    });
  }); 

  app.get('/api/products/range', (req, res) => {
    const userData = {
      controlIdFrom: req.body.controlIdFrom,
      controlIdTo: req.body.controlIdTo,
      codEmpresa: req.body.codEmpresa,
    };  

    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds

    UserModel.getProductRange( userData, function (err, data)  {
      res.status(200).json(data);
    });

  });
    
  app.get('/api/products/:id', (req, res) => {
    const userData = {
      id: req.params.id,
    };    
        
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    UserModel.getProductId( userData, function (err, data)  {
      res.status(200).json(data);
    });

  });
  
  app.get('/api/products/controlid/:controlId', (req, res) => {
    const userData = {
      control_id: req.params.controlId,
    };    
        
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    UserModel.getProductControlId( userData, function (err, data)  {
      res.status(200).json(data);
    });

  });
  
    
  app.post('/api/products', (req, res) => {

    var userData = {
        id: null , 
        control_id: req.body.control_id ,
        codempresa: req.body.codempresa ,
        codlinea: req.body.codlinea ,
        codproduct: req.body.codproduct ,
        name: req.body.name ,
        fecinivig: req.body.fecinivig ,
        fecfinvig: req.body.fecfinvig ,
        priceone: req.body.priceone ,
        pricetwo: req.body.pricetwo ,
        pricethree: req.body.pricethree ,
        pricerangenameone: req.body.pricerangenameone ,
        pricerangefromone: req.body.pricerangefromone ,
        pricerangetoone: req.body.pricerangetoone ,
        pricevaluefromone: req.body.pricevaluefromone ,
        pricevaluetoone: req.body.pricevaluetoone ,
        pricerangenametwo: req.body.pricerangenametwo ,
        pricerangefromtwo: req.body.pricerangefromtwo ,
        pricerangetotwo: req.body.pricerangetotwo ,
        pricevaluefromtwo: req.body.pricevaluefromtwo ,
        pricevaluetotwo: req.body.pricevaluetotwo ,
        pricerangenamethree: req.body.pricerangenamethree ,
        pricerangefromthree: req.body.pricerangefromthree ,
        pricerangetothree: req.body.pricerangetothree ,
        pricevaluefromthree: req.body.pricevaluefromthree ,
        pricevaluetothree: req.body.pricevaluetothree ,
        pricerangenamefour: req.body.pricerangenamefour ,
        pricerangenamefour: req.body.pricerangenamefour ,
        pricerangetofour: req.body.pricerangetofour ,
        pricevaluefromfour: req.body.pricevaluefromfour ,
        pricevaluetofour: req.body.pricevaluetofour ,
        pricerangenamefive: req.body.pricerangenamefive ,
        pricerangefromfive: req.body.pricerangefromfive ,
        pricerangetofive: req.body.pricerangetofive ,
        pricevaluefromfive: req.body.pricevaluefromfive ,
        pricevaluetofive: req.body.pricevaluetofive ,
        boxby: req.body.boxby ,
        typeunit: req.body.typeunit ,
        priceoflist: req.body.priceoflist ,
        flagprice: req.body.flagprice ,
        fecuv: req.body.fecuv ,
        flagcombo: req.body.flagcombo ,
        codsunat: req.body.codsunat
    };

    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    
    UserModel.insertProduct(userData, (err, data) => {
      if (data && data.insertId) {
        res.status(200).json({
          success: true,
          msg: "Inserted a new products",
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

  app.put('/api/products/:id', (req, res) => {
    const userData = {
      id: req.params.id,
      control_id: req.body.control_id ,
      codempresa: req.body.codempresa ,
      codlinea: req.body.codlinea ,
      codproduct: req.body.codproduct ,
      name: req.body.name ,
      fecinivig: req.body.fecinivig ,
      fecfinvig: req.body.fecfinvig ,
      priceone: req.body.priceone ,
      pricetwo: req.body.pricetwo ,
      pricethree: req.body.pricethree ,
      pricerangenameone: req.body.pricerangenameone ,
      pricerangefromone: req.body.pricerangefromone ,
      pricerangetoone: req.body.pricerangetoone ,
      pricevaluefromone: req.body.pricevaluefromone ,
      pricevaluetoone: req.body.pricevaluetoone ,
      pricerangenametwo: req.body.pricerangenametwo ,
      pricerangefromtwo: req.body.pricerangefromtwo ,
      pricerangetotwo: req.body.pricerangetotwo ,
      pricevaluefromtwo: req.body.pricevaluefromtwo ,
      pricevaluetotwo: req.body.pricevaluetotwo ,
      pricerangenamethree: req.body.pricerangenamethree ,
      pricerangefromthree: req.body.pricerangefromthree ,
      pricerangetothree: req.body.pricerangetothree ,
      pricevaluefromthree: req.body.pricevaluefromthree ,
      pricevaluetothree: req.body.pricevaluetothree ,
      pricerangenamefour: req.body.pricerangenamefour ,
      pricerangenamefour: req.body.pricerangenamefour ,
      pricerangetofour: req.body.pricerangetofour ,
      pricevaluefromfour: req.body.pricevaluefromfour ,
      pricevaluetofour: req.body.pricevaluetofour ,
      pricerangenamefive: req.body.pricerangenamefive ,
      pricerangefromfive: req.body.pricerangefromfive ,
      pricerangetofive: req.body.pricerangetofive ,
      pricevaluefromfive: req.body.pricevaluefromfive ,
      pricevaluetofive: req.body.pricevaluetofive ,
      boxby: req.body.boxby ,
      typeunit: req.body.typeunit ,
      priceoflist: req.body.priceoflist ,
      flagprice: req.body.flagprice ,
      fecuv: req.body.fecuv ,
      flagcombo: req.body.flagcombo ,
      codsunat: req.body.codsunat
    };

    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds

    UserModel.updateProduct(userData, function (err, data) {
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

  app.put('/api/products/emco/:clave', (req, res) => {
    const userData = {
      id: req.params.id,
      control_id: req.body.control_id ,
      codempresa: req.params.clave.substr(0,3) ,
      codlinea: req.body.codlinea ,
      codproduct:req.params.clave.substr(3,9) ,
      name: req.body.name ,
      fecinivig: req.body.fecinivig ,
      fecfinvig: req.body.fecfinvig ,
      priceone: req.body.priceone ,
      pricetwo: req.body.pricetwo ,
      pricethree: req.body.pricethree ,
      pricerangenameone: req.body.pricerangenameone ,
      pricerangefromone: req.body.pricerangefromone ,
      pricerangetoone: req.body.pricerangetoone ,
      pricevaluefromone: req.body.pricevaluefromone ,
      pricevaluetoone: req.body.pricevaluetoone ,
      pricerangenametwo: req.body.pricerangenametwo ,
      pricerangefromtwo: req.body.pricerangefromtwo ,
      pricerangetotwo: req.body.pricerangetotwo ,
      pricevaluefromtwo: req.body.pricevaluefromtwo ,
      pricevaluetotwo: req.body.pricevaluetotwo ,
      pricerangenamethree: req.body.pricerangenamethree ,
      pricerangefromthree: req.body.pricerangefromthree ,
      pricerangetothree: req.body.pricerangetothree ,
      pricevaluefromthree: req.body.pricevaluefromthree ,
      pricevaluetothree: req.body.pricevaluetothree ,
      pricerangenamefour: req.body.pricerangenamefour ,
      pricerangenamefour: req.body.pricerangenamefour ,
      pricerangetofour: req.body.pricerangetofour ,
      pricevaluefromfour: req.body.pricevaluefromfour ,
      pricevaluetofour: req.body.pricevaluetofour ,
      pricerangenamefive: req.body.pricerangenamefive ,
      pricerangefromfive: req.body.pricerangefromfive ,
      pricerangetofive: req.body.pricerangetofive ,
      pricevaluefromfive: req.body.pricevaluefromfive ,
      pricevaluetofive: req.body.pricevaluetofive ,
      boxby: req.body.boxby ,
      typeunit: req.body.typeunit ,
      priceoflist: req.body.priceoflist ,
      flagprice: req.body.flagprice ,
      fecuv: req.body.fecuv ,
      flagcombo: req.body.flagcombo ,
      codsunat: req.body.codsunat
    };

    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds

    UserModel.updateProductCodart(userData, function (err, data) {
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

  app.delete('/api/products/:id', (req, res) => {
    var id = req.params.id;
    UserModel.deleteProduct(id, (err, data) =>  {
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

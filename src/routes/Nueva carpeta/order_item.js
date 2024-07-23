const UserModel = require('../models/order_items');

module.exports = app => {

  app.get('/api/orderitems', (req, res) => {
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds

    UserModel.getOrderItems((err, data) => {
      res.status(200).json(data);
    });
  }); 

  app.get('/api/orderitems/:id', (req, res) => {
    const userData = {
      id: req.params.id,
    };    
        
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    UserModel.getOrderItemId( userData, function (err, data)  {
      res.status(200).json(data);
    });

  });

  app.get('/api/orderitems/empfec/:clave', (req, res) => {
    
    const userData = {
      codempresa: req.params.clave.substr(0,3),
      fecorden : req.params.clave.substr(3,8)
    };  
    
    console.log('Hola2')
    console.log ( userData.codempresa +' ' +userData.fecorden )

    req.setTimeout(30000); // Set request timeout to 5 seconds
    res.setTimeout(30000); // Set response timeout to 5 seconds
    UserModel.getOrderDetailsId( userData, function (err, data)  {
      res.status(200).json(data);
    });

  });  

  app.get('/api/orderitems/empfec/ndown/:clave', (req, res) => {
    
    const userData = {
      codempresa: req.params.clave.substr(0,3),
      fecorden : req.params.clave.substr(3,8),
      ndownload : req.params.clave.substr(11,1)
    };  
    

    console.log ( userData.codempresa +' ' +userData.fecorden + ' ' + userData.ndownload )

    req.setTimeout(30000); // Set request timeout to 5 seconds
    res.setTimeout(30000); // Set response timeout to 5 seconds
    UserModel.getOrderDetailsIdDownload( userData, function (err, data)  {
      res.status(200).json(data);
    });

  });  
  

  app.post('/api/orderitems', (req, res) => {
    var userData = {
        id: null , 
        order_id: req.body.order_id ,
        product_id: req.body.product_id ,
        quantity: req.body.quantity ,
        price: req.body.price ,
        typeunit: req.body.typeunit ,
        boxby: req.body.boxby ,
        typeprice: req.body.typeprice ,
        pricetlist: req.body.pricetlist ,
        codlevel: req.body.codlevel ,
        levelrangefrom: req.body.levelrangefrom ,
        levelrangeto: req.body.levelrangeto ,
        PedidoVta: req.body.PedidoVta,
        PedidoPed: req.body.PedidoPed,
        created_at: null,
        updated_at: null
    };
    
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    
    UserModel.insertOrderitem(userData, (err, data) => {
      if (data && data.insertId) {
        res.status(200).json({
          success: true,
          msg: "Inserted a new orderitems",
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

  app.put('/api/orderitems/:id', (req, res) => {
    const userData = {
      id: req.params.id,
      order_id: req.body.order_id ,
      product_id: req.body.product_id ,
      quantity: req.body.quantity ,
      price: req.body.price ,
      typeunit: req.body.typeunit ,
      boxby: req.body.boxby ,
      typeprice: req.body.typeprice ,
      pricetlist: req.body.pricetlist ,
      codlevel: req.body.codlevel ,
      levelrangefrom: req.body.levelrangefrom ,
      levelrangeto: req.body.levelrangeto ,
      PedidoVta: req.body.PedidoVta,
      PedidoPed: req.body.PedidoPed,
      created_at: null,
      updated_at: null
    };

    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    UserModel.updateOrderitem(userData, function (err, data) {
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

  app.delete('/api/orderitems/:id', (req, res) => {
    var id = req.params.id;
    UserModel.deleteOrderitem(id, (err, data) =>  {
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

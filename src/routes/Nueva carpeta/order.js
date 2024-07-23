const UserModel = require('../models/orders');

module.exports = app => {

  app.get('/api/orders', (req, res) => {
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    UserModel.getOrders((err, data) => {
      res.status(200).json(data);
    });
  }); 

  app.get('/api/orders/:id', (req, res) => {
    const userData = {
      id: req.params.id,
    };    
        
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    UserModel.getOrderId( userData, function (err, data)  {
      res.status(200).json(data);
    });

  });
  
  
  app.get('/api/orders/maxdown/:clave', (req, res) => {
    const userData = {
      codempresa: req.params.clave.substr(0,3),
      fecorden : req.params.clave.substr(3,8),
    };            
    req.setTimeout(15000); // Set request timeout to 5 seconds
    res.setTimeout(15000); // Set response timeout to 5 seconds
    UserModel.getMaxDownload( userData, function (err, data)  {
      res.status(200).json(data);
    });

  });
  

  app.get('/api/orders/empfec/:clave', (req, res) => {
    const userData = {
      codempresa: req.params.clave.substr(0,3),
      fecorden : req.params.clave.substr(3,8)
    };    
    console.log ( userData.codempresa +' ' +userData.fecorden )    
    req.setTimeout(30000); // Set request timeout to 5 seconds
    res.setTimeout(30000); // Set response timeout to 5 seconds

    
    UserModel.getOrderFecha( userData, async function (err, data)  {
      res.status(200).json(data);
    });

  });


  app.get('/api/orders/empfec/ndown/:clave', (req, res) => {
    const userData = {
      codempresa: req.params.clave.substr(0,3),
      fecorden : req.params.clave.substr(3,8),
      ndownload : req.params.clave.substr(11,1)
    };    
    console.log ( req.params.clave );
    console.log ( userData.codempresa +' ' +userData.fecorden + ' ' + + ' ' + userData.ndownload )    
    req.setTimeout(30000); // Set request timeout to 5 seconds
    res.setTimeout(30000); // Set response timeout to 5 seconds
    
    UserModel.getOrderFechaDownload( userData, async function (err, data)  {
      res.status(200).json(data);
    });

  });


   app.post('/api/ordersxxxx', (req, res) => {

    var userData = {
        id: null , 
        app_id: req.body.app_id ,
        dateorder: req.body.dateorder ,
        customer_id: req.body.customer_id ,
        seller_id: req.body.seller_id ,
        datedelivery: req.body.datedelivery ,
        paymenttype: req.body.paymenttype ,
        receiptType: req.body.receiptType ,
        imei: req.body.imei ,
        latitude: req.body.latitude ,
        longitude: req.body.longitude ,
        semaphore: req.body.semaphore ,
        PedidoVta: req.body.PedidoVta ,
        PedidoPed: req.body.PedidoPed ,
        statusDownloaded: req.body.statusDownloaded,
        orderInterna: req.body.orderInterna ,
        secuDownloaded: req.body.secuDownloaded ,
        anulado: req.body.anulado ,
        validado: req.body.validado ,
        created_at: null ,
        updated_at: null ,
        doc_fecha: req.body.doc_fecha ,
        doc_codtipo1: req.body.doc_codtipo1 ,
        doc_emision1: req.body.doc_emision1 ,
        doc_numdoc1: req.body.doc_numdoc1 ,
        doc_cntventa: req.body.doc_cntventa ,
        doc_cntorder: req.body.doc_cntorder ,
        codempresa: req.body.codempresa 
    };
    
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    UserModel.insertOrder(userData, (err, data) => {
      if (data && data.insertId) {
        res.status(200).json({
          success: true,
          msg: "Inserted a new orders",
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

  app.post('/api/orders', (req, res) => {

    var userData = {
      id: null , 
      app_id: req.body.appId ,
      dateorder: req.body.dateorder ,
      customer_id: req.body.customerId ,
      seller_id: req.body.sellerId ,
      datedelivery: req.body.datedelivery ,
      paymenttype: req.body.paymenttype ,
      receiptType: req.body.receiptType ,
      imei: req.body.imei ,
      latitude: req.body.latitude ,
      longitude: req.body.longitude ,
      semaphore: req.body.semaphore ,
      PedidoVta: 0 ,
      PedidoPed: 0 ,
      statusDownloaded: req.body.statusDownloaded,
      orderInterna: req.body.orderInterna ,
      secuDownloaded: 0 ,
      anulado: 0 ,
      validado: 0 ,
      created_at: null ,
      updated_at: null ,
      doc_fecha: " ",
      doc_codtipo1: " ",
      doc_emision1: " " ,
      doc_numdoc1: " " ,
      doc_cntventa: 0 ,
      doc_cntorder: 0 ,
      codempresa: req.body.codempresa ,
      itemPosts: req.body.ItemPost
  };
    
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds

    UserModel.insertOrder(userData, (err, data) => {
      if (data && data.insertId) {
        res.status(200).json({
          success: true,
          msg: "Inserted a new orders",
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


  app.post('/api/orders/batch', (req, res) => {

    var userData = {
        id: null , 
        app_id: req.body.appId ,
        dateorder: req.body.dateorder ,
        customer_id: req.body.customerId ,
        seller_id: req.body.sellerId ,
        datedelivery: req.body.datedelivery ,
        paymenttype: req.body.paymenttype ,
        receiptType: req.body.receiptType ,
        imei: req.body.imei ,
        latitude: req.body.latitude ,
        longitude: req.body.longitude ,
        semaphore: req.body.semaphore ,
        PedidoVta: 0 ,
        PedidoPed: 0 ,
        statusDownloaded: req.body.statusDownloaded,
        orderInterna: req.body.orderInterna ,
        secuDownloaded: 0 ,
        anulado: 0 ,
        validado: 0 ,
        created_at: null ,
        updated_at: null ,
        doc_fecha: " ",
        doc_codtipo1: " ",
        doc_emision1: " " ,
        doc_numdoc1: " " ,
        doc_cntventa: 0 ,
        doc_cntorder: 0 ,
        codempresa: req.body.codempresa ,
        itemPosts: req.body.ItemPost
    };
    console.log('UserData')

    console.log( userData)

    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    /*
    UserModel.insertOrder(userData, (err, data) => {
      if (data && data.insertId) {
        res.status(200).json({
          success: true,
          msg: "Inserted a new orders",
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
    */
  });

  app.put('/api/orders/:id', (req, res) => {
    const userData = {
      id: req.params.id,
      app_id: req.body.app_id ,
      dateorder: req.body.dateorder ,
      customer_id: req.body.customer_id ,
      seller_id: req.body.seller_id ,
      datedelivery: req.body.datedelivery ,
      paymenttype: req.body.paymenttype ,
      receiptType: req.body.receiptType ,
      imei: req.body.imei ,
      latitude: req.body.latitude ,
      longitude: req.body.longitude ,
      semaphore: req.body.semaphore ,
      PedidoVta: req.body.PedidoVta ,
      PedidoPed: req.body.PedidoPed ,
      statusDownloaded: req.body.statusDownloaded,
      orderInterna: req.body.orderInterna ,
      secuDownloaded: req.body.secuDownloaded ,
      anulado: req.body.anulado ,
      validado: req.body.validado ,
      created_at: null ,
      updated_at: null ,
      doc_fecha: req.body.doc_fecha ,
      doc_codtipo1: req.body.doc_codtipo1 ,
      doc_emision1: req.body.doc_emision1 ,
      doc_numdoc1: req.body.doc_numdoc1 ,
      doc_cntventa: req.body.doc_cntventa ,
      doc_cntorder: req.body.doc_cntorder ,
      codempresa: req.body.codempresa 
  };

  req.setTimeout(5000); // Set request timeout to 5 seconds
  res.setTimeout(5000); // Set response timeout to 5 seconds
  UserModel.updateOrder(userData, function (err, data) {
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

 app.put('/api/orders/status/:clave', async (req, res) => {
  const userData = {
    codempresa      : req.params.clave.substr(0,3),
    statusDownloaded: req.params.clave.substr(3,2),
    secuDownloaded  : req.params.clave.substr(5,6),
    fecvta          : req.params.clave.substr(11,8),
    id              : req.params.clave.substr(19,15)
};

req.setTimeout(600000); // Set request timeout to 5 seconds
res.setTimeout(600000); // Set response timeout to 5 seconds

UserModel.updateOrderStatus(userData, function (err, data) {
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


 app.put('/api/orders/codempresa/:codempresa', (req, res) => {
  const userData = {
    codempresa: req.params.codempresa
  };

req.setTimeout(50000); // Set request timeout to 5 seconds
res.setTimeout(50000); // Set response timeout to 5 seconds
UserModel.updateOrderCodEmpresa(userData, function (err, data) {
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


  app.delete('/api/orders/:id', (req, res) => {
    var id = req.params.id;
    UserModel.deleteOrder(id, (err, data) =>  {
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

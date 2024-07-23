const UserModel = require('../models/orders2');

module.exports = app => {

  app.get('/api/orders2/:id', (req, res) => {
    const userData = {
        id: req.params.id,
    };    
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds

    console.log( req.params.id );
    UserModel.getOrderId ( userData, function (err, data)  {
        res.status(200).json(data);
      });

    }); 

    app.get('/api/orders2', (req, res) => {
        const userData = {
            codempresa: req.params.codempresa,
            codven: req.params.codven,
        };    
          console.log( req.params.codempresa );
          req.setTimeout(5000); // Set request timeout to 5 seconds
          res.setTimeout(5000); // Set response timeout to 5 seconds
      
          UserModel.getData ( userData, function (err, data)  {
            res.status(200).json(data);
          });
    
        });
    
    app.post('/api/orders2', (req, res) => {

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


app.put('/api/articulos/:id', (req, res) => {
    const userData = {
      id: req.params.id,
      codempresa: req.body.codempresa ,
      codart: req.body.codart ,
      nombre: req.body.nombre ,
      fecuc: req.body.fecuc ,
      fecuv: req.body.fecuv ,
      fecut: req.body.fecut ,
      costo: req.body.costo ,
      precio1d: req.body.precio1d ,
      precio2d: req.body.precio2d ,
      precio1s: req.body.precio1s ,
      precio2s: req.body.precio2s ,
      codbarra: req.body.codbarra ,
      visualiza: req.body.visualiza ,
      afectoigv: req.body.afectoigv ,
      actual: req.body.actual ,
      cantidad: req.body. cantidad,
      cantidadst: req.body.cantidadst ,
      activo: req.body.activo ,
      precio3d: req.body.precio3d ,
      precio3s: req.body.precio3s ,
      precio4d: req.body.precio4d ,
      precio4s: req.body.precio4s ,
      feccrea: req.body.feccrea ,
      cajax: req.body.cajax ,
      unicaj: req.body.unicaj ,
      serie: req.body.serie ,
      modificado: req.body.modificado ,
      flag1: req.body.flag1 ,
      flag2: req.body.flag2 ,
      mdscto: req.body.mdscto ,
      fecinivig: req.body.fecinivig ,
      fecfinvig: req.body.fecfinvig ,
      peso: req.body.peso ,
      unimedpeso: req.body.unimedpeso ,
      flagapp: req.body.flagapp,
      flagcombo: req.body.flagcombo ,
      costop: req.body.costop ,
      precio1sp: req.body.precio1sp ,
      precio2sp: req.body.precio2sp ,
      precio3sp: req.body.precio3sp ,
      precio4sp: req.body.precio4sp ,
      mdsctop: req.body.mdsctop ,
      codlinea: req.body.codlinea ,
      codsunat: req.body.codsunat 
    };

    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds

    UserModel.updateArticulo(userData, function (err, data) {
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

};

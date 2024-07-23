const UserModel = require('../models/sellers');

module.exports = app => {

  app.get('/sellersx', (req, res) => {
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    UserModel.getSellers((err, data) => {
      res.status(200).json(data);
    });
  }); 

  app.get('/sellersx/:id', (req, res) => {
    const userData = {
      id: req.params.id,
    };    
        
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    UserModel.getSellerId( userData, function (err, data)  {
      res.status(200).json(data);
    });

  });

  app.get('/sellersx/login', (req, res) => {
    const userData = {
      imei: req.params.imei,
    };    
        
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    UserModel.getSellerImei( userData, function (err, data)  {
      res.status(200).json( data );
    });

  });


   app.post('/sellersx', (req, res) => {

    var userData = {
        id: null , 
        codempresa: req.body.codempresa , 
        tipoloc: req.body.tipoloc , 
        codloc: req.body.codloc , 
        codtie: req.body.codtie , 
        codven: req.body.codven , 
        nomven: req.body.nomven , 
        dirven: req.body.dirven , 
        locven: req.body.locven ,
        tele01: req.body.tele01 , 
        tele02: req.body.tele02 , 
        fecing: req.body.fecing , 
        siglaven: req.body.siglaven , 
        activo: req.body.activo , 
        cobrador: req.body.cobrador , 
        fecinivig: req.body.fecinivig , 
        fecfinvig: req.body.fecfinvig , 
        idventa: req.body.idventa , 
        imei: req.body.imei , 
        created_at: null , 
        updated_at: null , 
        provincia: req.body.provincia , 
        usuarioweb: req.body.usuarioweb , 
        claseweb: req.body.claseweb , 
        tokenweb: req.body.tokenweb , 
        codlinea: req.body.codlinea , 
        codvenidem: req.body.codvenidem 
    };
    
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    UserModel.insertSeller(userData, (err, data) => {
      if (data && data.insertId) {
        res.status(200).json({
          success: true,
          msg: "Inserted a new sellers",
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

  app.put('/sellersx/:id', (req, res) => {
    const userData = {
      id: req.params.id,
      codempresa: req.body.codempresa , 
      tipoloc: req.body.tipoloc , 
      codloc: req.body.codloc , 
      codtie: req.body.codtie , 
      codven: req.body.codven , 
      nomven: req.body.nomven , 
      dirven: req.body.dirven , 
      locven: req.body.locven ,
      tele01: req.body.tele01 , 
      tele02: req.body.tele02 , 
      fecing: req.body.fecing , 
      siglaven: req.body.siglaven , 
      activo: req.body.activo , 
      cobrador: req.body.cobrador , 
      fecinivig: req.body.fecinivig , 
      fecfinvig: req.body.fecfinvig , 
      idventa: req.body.idventa , 
      imei: req.body.imei , 
      created_at: null , 
      updated_at: null , 
      provincia: req.body.provincia , 
      usuarioweb: req.body.usuarioweb , 
      claseweb: req.body.claseweb , 
      tokenweb: req.body.tokenweb , 
      codlinea: req.body.codlinea , 
      codvenidem: req.body.codvenidem 
    };

    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    UserModel.updateSeller(userData, function (err, data) {
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

  app.delete('/sellersx/:id', (req, res) => {
    var id = req.params.id;
    UserModel.deleteSeller(id, (err, data) =>  {
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

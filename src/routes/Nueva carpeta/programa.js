const UserModel = require('../models/programas');

module.exports = app => {

  app.get('/programas', (req, res) => {
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds

    UserModel.getProgramas((err, data) => {
      res.status(200).json(data);
    });
  }); 

  app.get('/programas/:id', (req, res) => {
    const userData = {
      id: req.params.id,
    };    

    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    
    UserModel.getProgramaId( userData, function (err, data)  {
      res.status(200).json(data);
    });

  });

   app.post('/programas', (req, res) => {

    var userData = {
        id: null , 
        codempresa: req.body.codempresa ,
        tipoloc: req.body.tipoloc ,
        codloc: req.body.codloc ,
        codtran: req.body.codtran ,
        ndespacho: req.body.ndespacho ,
        fecha: req.body.fecha ,
        codpartida: req.body.codpartida ,
        observaciones: req.body.observaciones ,
        estado: req.body.estado ,
        reporte: req.body.reporte ,
        reporte_fecha: req.body.reporte_fecha ,
        idnube: req.body.idnube ,
        activo: req.body.activo ,
        anulado: req.body.anulado ,
        created_at: req.body.created_at ,
        updated_at: req.body.updated_at 
        };

    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
            
    UserModel.insertPrograma(userData, (err, data) => {
      if (data && data.insertId) {
        res.status(200).json({
          success: true,
          msg: "Inserted a new programa",
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

  app.put('/programas/:id', (req, res) => {
    const userData = {
      id: req.params.id,
      codempresa: req.body.codempresa ,
      tipoloc: req.body.tipoloc ,
      codloc: req.body.codloc ,
      codtran: req.body.codtran ,
      ndespacho: req.body.ndespacho ,
      fecha: req.body.fecha ,
      codpartida: req.body.codpartida ,
      observaciones: req.body.observaciones ,
      estado: req.body.estado ,
      reporte: req.body.reporte ,
      reporte_fecha: req.body.reporte_fecha ,
      idnube: req.body.idnube ,
      activo: req.body.activo ,
      anulado: req.body.anulado ,
      created_at: req.body.created_at ,
      updated_at: req.body.updated_at 
  };

  req.setTimeout(5000); // Set request timeout to 5 seconds
  res.setTimeout(5000); // Set response timeout to 5 seconds

  UserModel.updatePrograma(userData, function (err, data) {
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

  app.delete('/programas/:id', (req, res) => {
    var id = req.params.id;
    UserModel.deletePrograma(id, (err, data) =>  {
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

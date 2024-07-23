const UserModel = require('../models/clientes');
 
module.exports = app => {

  app.get('/clientes', async (req, res) => {

    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    await UserModel.getClientes((err, data) => {
      res.status(200).json(data);
    });
  });
  
  app.get('/clientes/:id', (req, res) => {
    const userData = {
      id: req.params.id,
    };    

    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    
    UserModel.getClienteId( userData, function (err, data)  {
      res.status(200).json(data);
    });

  });

  app.get('/clientes/api/:clave', (req, res) => {
    const userData = {
      codempresa: req.params.clave.substr(0,3),
      codven : req.params.clave.substr(3,4),
    };    
    
    //console.log ( userData.codempresa +' ' +userData.codven)
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds

    UserModel.getClienteCodven( userData, function (err, data)  {
      res.status(200).json(data);
    });

  });

  app.post('/clientes', (req, res) => {

    var userData = {
        id: null , 
        codempresa: req.body.codempresa ,
        fecing: req.body.fecing ,
        codcli: req.body.codcli ,
        nombre: req.body.nombre ,
        responsa: req.body.responsa ,
        nomcli: req.body.nomcli ,
        apepat: req.body.apepat ,
        apemat: req.body.apemat ,
        fecnac: req.body.fecnac ,
        dni: req.body.dni ,
        ruc: req.body.ruc ,
        pasaporte: req.body.pasaporte ,
        carnet: req.body.carnet ,
        cedula: req.body.cedula ,
        dircli: req.body.dircli ,
        dis: req.body.dis ,
        ubicli: req.body.ubicli ,
        tele01: req.body.tele01 ,
        tele02: req.body.tele02 ,
        celular: req.body.celular ,
        email: req.body.email ,
        codven: req.body.codven ,
        fecuc: req.body.fecuc ,
        fecup: req.body.fecup ,
        credito: req.body.credito,
        obs1: req.body.obs1 ,
        obs2: req.body.obs2 ,
        caution: req.body.caution ,
        clase: req.body.clase ,
        rucle: req.body.rucle ,
        activo: req.body.activo ,
        zona: req.body.zona ,
        fecinivig: req.body.fecinivig ,
        fecfinvig: req.body.fecfinvig ,
        codentidad: req.body.codentidad ,
        flagapp: req.body.flagapp ,
        semaforo: req.body.semaforo ,
        fmod: req.body.fmod 
    };
    
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds

    UserModel.insertCliente(userData, (err, data) => {
      if (data && data.insertId) {
        res.status(200).json({
          success: true,
          msg: "Inserted a new clientes",
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

  app.put('/clientes/:id', (req, res) => {
    const userData = {
      id: req.params.id,
      codempresa: req.body.codempresa ,
      fecing: req.body.fecing ,
      codcli: req.body.codcli ,
      nombre: req.body.nombre ,
      responsa: req.body.responsa ,
      nomcli: req.body.nomcli ,
      apepat: req.body.apepat ,
      apemat: req.body.apemat ,
      fecnac: req.body.fecnac ,
      dni: req.body.dni ,
      ruc: req.body.ruc ,
      pasaporte: req.body.pasaporte ,
      carnet: req.body.carnet ,
      cedula: req.body.cedula ,
      dircli: req.body.dircli ,
      dis: req.body.dis ,
      ubicli: req.body.ubicli ,
      tele01: req.body.tele01 ,
      tele02: req.body.tele02 ,
      celular: req.body.celular ,
      email: req.body.email ,
      codven: req.body.codven ,
      fecuc: req.body.fecuc ,
      fecup: req.body.fecup ,
      credito: req.body.credito,
      obs1: req.body.obs1 ,
      obs2: req.body.obs2 ,
      caution: req.body.caution ,
      clase: req.body.clase ,
      rucle: req.body.rucle ,
      activo: req.body.activo ,
      zona: req.body.zona ,
      fecinivig: req.body.fecinivig ,
      fecfinvig: req.body.fecfinvig ,
      codentidad: req.body.codentidad ,
      flagapp: req.body.flagapp ,
      semaforo: req.body.semaforo ,
      fmod: req.body.fmod 
      };

    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds

    UserModel.updateCliente(userData, function (err, data) {
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

  app.delete('/clientes/:id', (req, res) => {
    var id = req.params.id;
    UserModel.deleteCliente(id, (err, data) =>  {
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

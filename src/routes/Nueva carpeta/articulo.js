const UserModel = require('../models/articulos');
 
module.exports = app => {

  app.get('/api/articulos', (req, res) => {
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds

    UserModel.getArticulos((err, data) => {
      res.status(200).json(data);
    });
  });

  app.get('/api/articulos/:id', (req, res) => {
    const userData = {
      id: req.params.id,
    };    
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    
    UserModel.getArticuloId( userData, function (err, data)  {
      res.status(200).json(data);
    });

  });
    
  app.post('/api/articulos', (req, res) => {

    var userData = {
        id: null , 
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
    
    UserModel.insertArticulo(userData, (err, data) => {
      if (data && data.insertId) {
        res.status(200).json({
          success: true,
          msg: "Inserted a new articulos",
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

  app.put('/api/articulos/emco/:clave', (req, res) => {
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

    UserModel.updateArticuloCodart(userData, function (err, data) {
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

  app.delete('/api/articulos/:id', (req, res) => {
    var id = req.params.id;
    UserModel.deleteArticulo(id, (err, data) =>  {
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

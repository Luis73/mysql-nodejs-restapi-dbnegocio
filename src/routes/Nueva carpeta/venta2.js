const UserModel = require('../models/ventas2');

module.exports = app => {

  app.get('/api/ventas2', (req, res) => {

    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    UserModel.getVentas2((err, data) => {
      res.status(200).json(data);
    });
  });

  app.get('/api/ventas2/:id', (req, res) => {
    const userData = {
      id: req.params.id,
    };     
        
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    UserModel.getVentaItemId( userData, function (err, data)  {
      res.status(200).json(data);
    });

  });

  app.get('/api/ventas2/vede/:id', (req, res) => {
    const userData = {
      id: req.params.id,
    };    
        
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    UserModel.getVentaDetailsId( userData, function (err, data)  {
      res.status(200).json(data);
    });
  });

  app.get('/api/ventas2/empe/:clave', (req, res) => {
    const userData = {
      codempresa: req.params.clave.substr(0,3),
      tipoloc: req.params.clave.substr(3,2),
      codloc: req.params.clave.substr(5,2),
      pedidovta : req.params.clave.substr(7,20),   
      item: req.params.clave.substr(27,5)
    };    
        
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    UserModel.getVentaDetailsPedidovta( userData, function (err, data)  {
      res.status(200).json(data);
    });

});  

  app.get('/api/ventas2/existe/:clave', (req, res) => {
    const userData = {
      codempresa: req.params.clave.substr(0,3),
      tipoloc: req.params.clave.substr(3,2),
      codloc: req.params.clave.substr(5,2),
      pedidovta : req.params.clave.substr(7,20),   
      item: req.params.clave.substr(27,5)
    };    
        
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    UserModel.getVentaDetailsExiste( userData, function (err, data)  {
      res.status(200).json(data);
    });

  });  

  app.post('/api/ventas2', (req, res) => {
    var userData = {
        codempresa: req.body.codempresa ,
        tipoloc: req.body.tipoloc ,
        codloc: req.body.codloc ,
        pedidovta: req.body.pedidovta ,
        tipo: req.body.tipo ,
        codtie: req.body.codtie ,
        item: req.body.item ,
        codart: req.body.codart ,
        noserie: req.body.noserie ,
        cantidad: req.body.cantidad ,
        control: req.body.control ,
        precio: req.body.precio ,
        afectoigv: req.body.afectoigv ,
        obsequio: req.body.obsequio ,
        codcli: req.body.codcli ,
        contrato: req.body.contrato ,
        detalle: req.body.detalle ,
        tipop: req.body.tipop ,
        cajax: req.body.cajax ,
        unicaj: req.body.unicaj ,
        precio1: req.body.precio1 ,
        precio2: req.body.precio2 ,
        modificado: req.body.modificado ,
        flag1: req.body.flag1 ,
        flag2: req.body.flag2 ,
        precio3: req.body.precio3 ,
        comision: req.body.comision ,
        exceso: req.body.exceso ,
        retener: req.body.retener ,
        mdscto: req.body.mdscto ,
        detalle1: req.body.detalle1 ,
        detalle2: req.body.detalle2 ,
        devolucion: req.body.devolucion ,
        codlista: req.body.codlista ,
        codnivel: req.body.codnivel ,
        flagapp: req.body.flagapp ,
        idventa1: req.body.idventa1 ,
        idproduct: req.body.idproduct ,
        latitude: req.body.latitude ,
        longitude: req.body.longitude ,
        cntentrega: req.body.cntentrega ,
        latituderep: req.body.latituderep ,
        longituderep: req.body.longituderep ,
        recep_ok: req.body.recep_ok ,
        downnube: req.body.downnube ,
        costo: req.body.costo 
    };
    
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    
    UserModel.insertVenta2Item(userData, (err, data) => {
      if (data && data.insertId) {
        res.status(200).json({
          success: true,
          msg: "Inserted a new ventas2",
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

  /*
  pcodempresa , ptipoloc, pcodloc , ppedidovta , ptipo , pcodtie , pitem , pcodart , pnoserie ,
  pcantidad ,  pcontrol , pprecio , pafectoigv , pobsequio  ,  pcodcli , pcontrato , pdetalle ,
  ptipop , pcajax , punicaj , pprecio1 , pprecio2 , pmodificado , pflag1 , pflag2 , pprecio3 ,
  pcomision , pexceso , pretener , pmdscto , pdetalle1 , pdetalle2 , pdevolucion , pcodlista ,
  pcodnivel , pflagapp , pidventa1 , pidproduct , pcosto  
*/

  app.post('/api/ventas2/empe/:clave', (req, res) => {
            
    var userData = {
        codempresa: req.params.clave.substr(0,3) ,
        tipoloc: req.params.clave.substr(3,2)  ,
        codloc: req.params.clave.substr(5,2)  ,
        pedidovta: req.params.clave.substr(7,20) ,
        tipo: req.body.tipo ,
        codtie: req.body.codtie ,
        item:  req.params.clave.substr(7,5),
        codart: req.body.codart ,
        noserie: req.body.noserie ,
        cantidad: req.body.cantidad ,
        control: req.body.control ,
        precio: req.body.precio ,
        afectoigv: req.body.afectoigv ,
        obsequio: req.body.obsequio ,
        codcli: req.body.codcli ,
        contrato: req.body.contrato ,
        detalle: req.body.detalle ,
        tipop: req.body.tipop ,
        cajax: req.body.cajax ,
        unicaj: req.body.unicaj ,
        precio1: req.body.precio1 ,
        precio2: req.body.precio2 ,
        modificado: req.body.modificado ,
        flag1: req.body.flag1 ,
        flag2: req.body.flag2 ,
        precio3: req.body.precio3 ,
        comision: req.body.comision ,
        exceso: req.body.exceso ,
        retener: req.body.retener ,
        mdscto: req.body.mdscto ,
        detalle1: req.body.detalle1 ,
        detalle2: req.body.detalle2 ,
        devolucion: req.body.devolucion ,
        codlista: req.body.codlista ,
        codnivel: req.body.codnivel ,
        flagapp: req.body.flagapp ,
        idventa1: req.body.idventa1 ,
        idproduct: req.body.idproduct ,
        latitude: req.body.latitude ,
        longitude: req.body.longitude ,
        cntentrega: req.body.cntentrega ,
        latituderep: req.body.latituderep ,
        longituderep: req.body.longituderep ,
        recep_ok: req.body.recep_ok ,
        downnube: req.body.downnube ,
        costo: req.body.costo 
    };
    console.log (userData.codempresa);
    console.log (userData.pedidovta);
    console.log (userData.item);
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    
    UserModel.insertVenta2item(userData, (err, data) => {
      if (data && data.insertId) {
        res.status(200).json({
          success: true,
          msg: "Inserted a new ventas2",
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

  app.put('/api/ventas2/:id', (req, res) => {
    const userData = {
      id: req.body.id ,
      codempresa: req.body.codempresa ,
      tipoloc: req.body.tipoloc ,
      codloc: req.body.codloc ,
      tipo: req.body.tipo ,
      codtie: req.body.codtie ,
      item: req.body.item ,
      codart: req.body.codart ,
      noserie: req.body.noserie ,
      cantidad: req.body.cantidad ,
      control: req.body.control ,
      precio: req.body.precio ,
      afectoigv: req.body.afectoigv ,
      obsequio: req.body.obsequio ,
      codcli: req.body.codcli ,
      contrato: req.body.contrato ,
      detalle: req.body.detalle ,
      tipop: req.body.tipop ,
      cajax: req.body.cajax ,
      unicaj: req.body.unicaj ,
      precio1: req.body.precio1 ,
      precio2: req.body.precio2 ,
      modificado: req.body.modificado ,
      flag1: req.body.flag1 ,
      flag2: req.body.flag2 ,
      precio3: req.body.precio3 ,
      comision: req.body.comision ,
      exceso: req.body.exceso ,
      retener: req.body.retener ,
      mdscto: req.body.mdscto ,
      detalle1: req.body.detalle1 ,
      detalle2: req.body.detalle2 ,
      devolucion: req.body.devolucion ,
      codlista: req.body.codlista ,
      codnivel: req.body.codnivel ,
      flagapp: req.body.flagapp ,
      idventa1: req.body.idventa1 ,
      idproduct: req.body.idproduct ,
      latitude: req.body.latitude ,
      longitude: req.body.longitude ,
      cntentrega: req.body.cntentrega ,
      latituderep: req.body.latituderep ,
      longituderep: req.body.longituderep ,
      recep_ok: req.body.recep_ok ,
      downnube: req.body.downnube ,
      costo: req.body.costo 
      };

      req.setTimeout(5000); // Set request timeout to 5 seconds
      res.setTimeout(5000); // Set response timeout to 5 seconds
      UserModel.updateVenta2Id(userData, function (err, data) {
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

  app.put('/api/ventas2/empe/:clave', (req, res) => {
    const userData = {
      id: req.params.id,
      codempresa: req.params.clave.substr(0,3) ,
      tipoloc: req.params.clave.substr(3,2) ,
      codloc: req.params.clave.substr(5,2) ,
      pedidovta: req.params.clave.substr(7,20) ,
      tipo: req.body.tipo ,
      codtie: req.body.codtie ,
      item: req.params.clave.substr(27,5),
      codart: req.body.codart ,
      noserie: req.body.noserie ,
      cantidad: req.body.cantidad ,
      control: req.body.control ,
      precio: req.body.precio ,
      afectoigv: req.body.afectoigv ,
      obsequio: req.body.obsequio ,
      codcli: req.body.codcli ,
      contrato: req.body.contrato ,
      detalle: req.body.detalle ,
      tipop: req.body.tipop ,
      cajax: req.body.cajax ,
      unicaj: req.body.unicaj ,
      precio1: req.body.precio1 ,
      precio2: req.body.precio2 ,
      modificado: req.body.modificado ,
      flag1: req.body.flag1 ,
      flag2: req.body.flag2 ,
      precio3: req.body.precio3 ,
      comision: req.body.comision ,
      exceso: req.body.exceso ,
      retener: req.body.retener ,
      mdscto: req.body.mdscto ,
      detalle1: req.body.detalle1 ,
      detalle2: req.body.detalle2 ,
      devolucion: req.body.devolucion ,
      codlista: req.body.codlista ,
      codnivel: req.body.codnivel ,
      flagapp: req.body.flagapp ,
      idventa1: req.body.idventa1 ,
      idproduct: req.body.idproduct ,
      latitude: req.body.latitude ,
      longitude: req.body.longitude ,
      cntentrega: req.body.cntentrega ,
      latituderep: req.body.latituderep ,
      longituderep: req.body.longituderep ,
      recep_ok: req.body.recep_ok ,
      downnube: req.body.downnube ,
      costo: req.body.costo 
      };

      req.setTimeout(5000); // Set request timeout to 5 seconds
      res.setTimeout(5000); // Set response timeout to 5 seconds
      UserModel.updateVenta2ItemPedidovta(userData, function (err, data) {
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

  
  app.delete('/api/ventas2/:id', (req, res) => {
    var id = req.params.id;
    UserModel.deleteVenta2item(id, (err, data) =>  {
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

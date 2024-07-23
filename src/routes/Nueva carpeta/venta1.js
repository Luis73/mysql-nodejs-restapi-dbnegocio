const UserModel = require('../models/ventas1');

module.exports = app => {

  app.get('/api/ventas1', (req, res) => {

    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    UserModel.getVentas1((err, data) => {
      res.status(200).json(data);
    });
  });

  app.get('/api/ventas1/:id', (req, res) => {
    const userData = {
      id: req.params.id,
    };     
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
        
    UserModel.getVentas1Id( userData, function (err, data)  {
      res.status(200).json(data);
    });

  });

  app.get('/api/ventas1/:clave', (req, res) => {
    const userData = {
      codempresa: req.params.clave.substr(0,3),
      codven : req.params.clave.substr(3,4),
      fecha : req.params.clave.substr(7,8),
    };    
    
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    UserModel.getVentas1Fecha( userData, function (err, data)  {
      res.status(200).json(data);
    });

  });


  app.get('/api/ventas1/empe/:clave', (req, res) => {
    const userData = {
      codempresa: req.params.clave.substr(0,3),
      tipoloc: req.params.clave.substr(3,2),
      codloc: req.params.clave.substr(5,2),
      pedidovta : req.params.clave.substr(7,20),
    };    

    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    
    UserModel.getVentas1Pedidovta( userData, function (err, data)  {
      res.status(200).json(data);
    });

  });

  app.get('/api/ventas1/existe/:clave', (req, res) => {
    const userData = {
      codempresa: req.params.clave.substr(0,3),
      tipoloc: req.params.clave.substr(3,2),
      codloc: req.params.clave.substr(5,2),
      pedidovta : req.params.clave.substr(7,20),
    };    
    console.log(userData.codempresa);
    console.log(userData.tipoloc);
    console.log(userData.codloc);
    console.log(userData.pedidovta);
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    
    UserModel.getVentas1Existe( userData, function (err, data)  {
      res.status(200).json(data);
    });

  });

  app.post('/api/ventas1', (req, res) => {

    var userData = {
      codempresa: req.body.codempresa,
      tipoloc: req.body.tipoloc ,
      codloc: req.body.codloc ,
      pedidovta: req.body.pedidovta ,
      fecha: req.body.fecha ,
      codcli: req.body.codcli ,
      emitira: req.body.emitira ,
      codven: req.body.codven ,
      codmod: req.body.codmod ,
      codtipo1: req.body.codtipo1 ,
      numdoc1: req.body.numdoc1 ,
      pigv: req.body.pigv ,
      tipo: req.body.tipo ,
      codtie: req.body.codtie ,
      contrato: req.body.contrato ,
      codtipo2: req.body.codtipo2 ,
      numdoc2: req.body.numdoc2 ,
      oc: req.body.oc ,
      moneda: req.body.moneda ,
      montob: req.body.montob ,
      montoi: req.body.montoi ,
      dscto: req.body.dscto ,
      montoneto1: req.body.montoneto1,
      montoneto1s: req.body.montoneto1s ,
      montoneto1d: req.body.montoneto1d ,
      montoneto2: req.body.montoneto2 ,
      fecpvcto: req.body.fecpvcto ,
      cambio: req.body.cambio ,
      nletras: req.body.nletras ,
      cinicial: req.body.cinicial ,
      monsepara: req.body.monsepara ,
      mahora: req.body.mahora ,
      mahoras: req.body.mahoras ,
      mahorad: req.body.mahorad ,
      sinicial: req.body.sinicial ,
      feclei: req.body.feclei ,
      nletras1: req.body.nletras1 ,
      mletras1: req.body.mletras1 ,
      nletras2: req.body.nletras2 ,
      mletras2: req.body.mletras2 ,
      nletras3: req.body.nletras3 ,
      mletras3: req.body.mletras3 ,
      obs1: req.body.obs1 ,
      obs2: req.body.obs2 ,
      recibo: req.body.recibo ,
      karpa: req.body.karpa ,
      impreso: req.body.impreso ,
      procesado: req.body.procesado ,
      correcto: req.body.correcto ,
      obsequio: req.body.obsequio ,
      anulado: req.body.anulado ,
      pagoacta: req.body.pagoacta ,
      obs3: req.body.obs3 ,
      esxmora: req.body.esxmora ,
      ndespacho: req.body.ndespacho ,
      modificado: req.body.modificado ,
      flag1: req.body.flag1 ,
      flag2: req.body.flag2 ,
      fecreg: req.body.fecreg ,
      horreg: req.body.horreg ,
      norden: req.body.norden ,
      fecent: req.body.fecent ,
      abono: req.body.abono ,
      saldo: req.body.saldo ,
      gratuito: req.body.gratuito ,
      separacion: req.body.separacion ,
      esxrefina: req.body.esxrefina ,
      esxgastos: req.body.esxgastos ,
      motivo: req.body.motivo ,
      codemi: req.body.codemi ,
      emision1: req.body.emision1 ,
      emision2: req.body.emision2 ,
      emision3: req.body.emision3 ,
      codtipo3: req.body.codtipo3 ,
      numdoc3: req.body.numdoc3 ,
      fecdoc3: req.body.fecdoc3 ,
      fecvcto: req.body.fecvcto ,
      tiponc: req.body.tiponc ,
      tipond: req.body.tipond,
      noperacion: req.body.noperacion ,
      incluncnd: req.body.incluncnd ,
      enviosunat: req.body.enviosunat ,
      sunat: req.body.sunat ,
      revisadook: req.body.revisadook ,
      ncok: req.body.ncok ,
      ndok: req.body.ndok ,
      ncndok: req.body.ncndok ,
      asocdocu: req.body.asocdocu ,
      pedidoord: req.body.pedidoord ,
      flagapp: req.body.flagapp ,
      idseller: req.body.idseller ,
      idcustomer: req.body.idcustomer,
      latitude: req.body.latitude ,
      longitude: req.body.longitude ,
      };
    
      req.setTimeout(5000); // Set request timeout to 5 seconds
      res.setTimeout(5000); // Set response timeout to 5 seconds
      UserModel.insertVenta1(  userData, (err, data) => {
      console.log( data)
      if (data && data.insertId) {
        res.status(200).json({
          success: true,
          msg: "Inserted a new ventas1",
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
app.post('/api/ventas1', (req, res) => {

    var userData = {
        id: null , 
        codempresa: req.body.codempresa ,
        tipoloc: req.body.tipoloc ,
        codloc: req.body.codloc ,
        pedidovta: req.body.pedidovta ,
        fecha: req.body.fecha ,
        codcli: req.body.codcli ,
        emitira: req.body.emitira ,
        codven: req.body.codven ,
        codmod: req.body.codmod ,
        codtipo1: req.body.codtipo1 ,
        numdoc1: req.body.numdoc1 ,
        pigv: req.body.pigv ,
        tipo: req.body.tipo ,
        codtie: req.body.codtie ,
        contrato: req.body.contrato ,
        codtipo2: req.body.codtipo2 ,
        numdoc2: req.body.numdoc2 ,
        oc: req.body.oc ,
        moneda: req.body.moneda ,
        montob: req.body.montob ,
        montoi: req.body.montoi ,
        dscto: req.body.dscto ,
        montoneto1: req.body.montoneto1,
        montoneto1s: req.body.montoneto1s ,
        montoneto1d: req.body.montoneto1d ,
        montoneto2: req.body.montoneto2 ,
        fecpvcto: req.body.fecpvcto ,
        cambio: req.body.cambio ,
        nletras: req.body.nletras ,
        cinicial: req.body.cinicial ,
        monsepara: req.body.monsepara ,
        mahora: req.body.mahora ,
        mahoras: req.body.mahoras ,
        mahorad: req.body.mahorad ,
        sinicial: req.body.sinicial ,
        feclei: req.body.feclei ,
        nletras1: req.body.nletras1 ,
        mletras1: req.body.mletras1 ,
        nletras2: req.body.nletras2 ,
        mletras2: req.body.mletras2 ,
        nletras3: req.body.nletras3 ,
        mletras3: req.body.mletras3 ,
        obs1: req.body.obs1 ,
        obs2: req.body.obs2 ,
        recibo: req.body.recibo ,
        karpa: req.body.karpa ,
        impreso: req.body.impreso ,
        procesado: req.body.procesado ,
        correcto: req.body.correcto ,
        obsequio: req.body.obsequio ,
        anulado: req.body.anulado ,
        pagoacta: req.body.pagoacta ,
        obs3: req.body.obs3 ,
        esxmora: req.body.esxmora ,
        ndespacho: req.body.ndespacho ,
        modificado: req.body.modificado ,
        flag1: req.body.flag1 ,
        flag2: req.body.flag2 ,
        fecreg: req.body.fecreg ,
        horreg: req.body.horreg ,
        norden: req.body.norden ,
        fecent: req.body.fecent ,
        abono: req.body.abono ,
        saldo: req.body.saldo ,
        gratuito: req.body.gratuito ,
        separacion: req.body.separacion ,
        esxrefina: req.body.esxrefina ,
        esxgastos: req.body.esxgastos ,
        motivo: req.body.motivo ,
        codemi: req.body.codemi ,
        emision1: req.body.emision1 ,
        emision2: req.body.emision2 ,
        emision3: req.body.emision3 ,
        codtipo3: req.body.codtipo3 ,
        numdoc3: req.body.numdoc3 ,
        fecdoc3: req.body.fecdoc3 ,
        fecvcto: req.body.fecvcto ,
        tiponc: req.body.tiponc ,
        tipond: req.body.tipond,
        noperacion: req.body.noperacion ,
        incluncnd: req.body.incluncnd ,
        enviosunat: req.body.enviosunat ,
        sunat: req.body.sunat ,
        revisadook: req.body.revisadook ,
        ncok: req.body.ncok ,
        ndok: req.body.ndok ,
        ncndok: req.body.ncndok ,
        asocdocu: req.body.property ,
        pedidoord: req.body.pedidoord ,
        flagapp: req.body.flagapp ,
        created_at: null ,
        idseller: req.body.idseller ,
        idcustomer: req.body.idcustomer,
        imei: req.body.imei ,
        latitude: req.body.latitude ,
        longitude: req.body.longitude ,
        entrega: req.body.entrega ,
        monentrega: req.body.monentrega ,
        monefectivo: req.body.monefectivo ,
        control_id: req.body.control_id ,
        latituderep: req.body.latituderep ,
        longituderep: req.body.longituderep ,
        recep_ok: req.body.recep_ok ,
        entrega_fecha: req.body.entrega_fecha ,
        downnube: req.body.downnube 
        };
    
    UserModel.insertVenta1(userData, (err, data) => {
      if (data && data.insertId) {
        res.status(200).json({
          success: true,
          msg: "Inserted a new ventas1",
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

*/

  app.put('/api/ventas1/:id', (req, res) => {
    const userData = {
      id: req.params.id,
      codempresa: req.body.codempresa ,
      tipoloc: req.body.tipoloc ,
      codloc: req.body.codloc ,
      pedidovta: req.body.pedidovta ,
      fecha: req.body.fecha ,
      codcli: req.body.codcli ,
      emitira: req.body.emitira ,
      codven: req.body.codven ,
      codmod: req.body.codmod ,
      codtipo1: req.body.codtipo1 ,
      numdoc1: req.body.numdoc1 ,
      pigv: req.body.pigv ,
      tipo: req.body.tipo ,
      codtie: req.body.codtie ,
      contrato: req.body.contrato ,
      codtipo2: req.body.codtipo2 ,
      numdoc2: req.body.numdoc2 ,
      oc: req.body.oc ,
      moneda: req.body.moneda ,
      montob: req.body.montob ,
      montoi: req.body.montoi ,
      dscto: req.body.dscto ,
      montoneto1: req.body.montoneto1,
      montoneto1s: req.body.montoneto1s ,
      montoneto1d: req.body.montoneto1d ,
      montoneto2: req.body.montoneto2 ,
      fecpvcto: req.body.fecpvcto ,
      cambio: req.body.cambio ,
      nletras: req.body.nletras ,
      cinicial: req.body.cinicial ,
      monsepara: req.body.monsepara ,
      mahora: req.body.mahora ,
      mahoras: req.body.mahoras ,
      mahorad: req.body.mahorad ,
      sinicial: req.body.sinicial ,
      feclei: req.body.feclei ,
      nletras1: req.body.nletras1 ,
      mletras1: req.body.mletras1 ,
      nletras2: req.body.nletras2 ,
      mletras2: req.body.mletras2 ,
      nletras3: req.body.nletras3 ,
      mletras3: req.body.mletras3 ,
      obs1: req.body.obs1 ,
      obs2: req.body.obs2 ,
      recibo: req.body.recibo ,
      karpa: req.body.karpa ,
      impreso: req.body.impreso ,
      procesado: req.body.procesado ,
      correcto: req.body.correcto ,
      obsequio: req.body.obsequio ,
      anulado: req.body.anulado ,
      pagoacta: req.body.pagoacta ,
      obs3: req.body.obs3 ,
      esxmora: req.body.esxmora ,
      ndespacho: req.body.ndespacho ,
      modificado: req.body.modificado ,
      flag1: req.body.flag1 ,
      flag2: req.body.flag2 ,
      fecreg: req.body.fecreg ,
      horreg: req.body.horreg ,
      norden: req.body.norden ,
      fecent: req.body.fecent ,
      abono: req.body.abono ,
      saldo: req.body.saldo ,
      gratuito: req.body.gratuito ,
      separacion: req.body.separacion ,
      esxrefina: req.body.esxrefina ,
      esxgastos: req.body.esxgastos ,
      motivo: req.body.motivo ,
      codemi: req.body.codemi ,
      emision1: req.body.emision1 ,
      emision2: req.body.emision2 ,
      emision3: req.body.emision3 ,
      codtipo3: req.body.codtipo3 ,
      numdoc3: req.body.numdoc3 ,
      fecdoc3: req.body.fecdoc3 ,
      fecvcto: req.body.fecvcto ,
      tiponc: req.body.tiponc ,
      tipond: req.body.tipond,
      noperacion: req.body.noperacion ,
      incluncnd: req.body.incluncnd ,
      enviosunat: req.body.enviosunat ,
      sunat: req.body.sunat ,
      revisadook: req.body.revisadook ,
      ncok: req.body.ncok ,
      ndok: req.body.ndok ,
      ncndok: req.body.ncndok ,
      asocdocu: req.body.asocdocu ,
      pedidoord: req.body.pedidoord ,
      flagapp: req.body.flagapp ,
      created_at: null ,
      idseller: req.body.idseller ,
      idcustomer: req.body.idcustomer,
      imei: req.body.imei ,
      latitude: req.body.latitude ,
      longitude: req.body.longitude ,
      entrega: req.body.entrega ,
      monentrega: req.body.monentrega ,
      monefectivo: req.body.monefectivo ,
      control_id: req.body.control_id ,
      latituderep: req.body.latituderep ,
      longituderep: req.body.longituderep ,
      recep_ok: req.body.recep_ok ,
      entrega_fecha: req.body.entrega_fecha ,
      downnube: req.body.downnube 
    };

    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds

    UserModel.updateVenta1Pedidovta(userData, function (err, data) {
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

  app.put('/api/ventas1/empe/:clave', (req, res) => {
    const userData = {
      codempresa: req.params.clave.substr(0,3) ,
      tipoloc: req.params.clave.substr(3,2)  ,
      codloc: req.params.clave.substr(5,2)  ,
      pedidovta: req.params.clave.substr(7,20) ,
      fecha: req.body.fecha ,
      codcli: req.body.codcli ,
      emitira: req.body.emitira ,
      codven: req.body.codven ,
      codmod: req.body.codmod ,
      codtipo1: req.body.codtipo1 ,
      numdoc1: req.body.numdoc1 ,
      pigv: req.body.pigv ,
      tipo: req.body.tipo ,
      codtie: req.body.codtie ,
      contrato: req.body.contrato ,
      codtipo2: req.body.codtipo2 ,
      numdoc2: req.body.numdoc2 ,
      oc: req.body.oc ,
      moneda: req.body.moneda ,
      montob: req.body.montob ,
      montoi: req.body.montoi ,
      dscto: req.body.dscto ,
      montoneto1: req.body.montoneto1,
      montoneto1s: req.body.montoneto1s ,
      montoneto1d: req.body.montoneto1d ,
      montoneto2: req.body.montoneto2 ,
      fecpvcto: req.body.fecpvcto ,
      cambio: req.body.cambio ,
      nletras: req.body.nletras ,
      cinicial: req.body.cinicial ,
      monsepara: req.body.monsepara ,
      mahora: req.body.mahora ,
      mahoras: req.body.mahoras ,
      mahorad: req.body.mahorad ,
      sinicial: req.body.sinicial ,
      feclei: req.body.feclei ,
      nletras1: req.body.nletras1 ,
      mletras1: req.body.mletras1 ,
      nletras2: req.body.nletras2 ,
      mletras2: req.body.mletras2 ,
      nletras3: req.body.nletras3 ,
      mletras3: req.body.mletras3 ,
      obs1: req.body.obs1 ,
      obs2: req.body.obs2 ,
      recibo: req.body.recibo ,
      karpa: req.body.karpa ,
      impreso: req.body.impreso ,
      procesado: req.body.procesado ,
      correcto: req.body.correcto ,
      obsequio: req.body.obsequio ,
      anulado: req.body.anulado ,
      pagoacta: req.body.pagoacta ,
      obs3: req.body.obs3 ,
      esxmora: req.body.esxmora ,
      ndespacho: req.body.ndespacho ,
      modificado: req.body.modificado ,
      flag1: req.body.flag1 ,
      flag2: req.body.flag2 ,
      fecreg: req.body.fecreg ,
      horreg: req.body.horreg ,
      norden: req.body.norden ,
      fecent: req.body.fecent ,
      abono: req.body.abono ,
      saldo: req.body.saldo ,
      gratuito: req.body.gratuito ,
      separacion: req.body.separacion ,
      esxrefina: req.body.esxrefina ,
      esxgastos: req.body.esxgastos ,
      motivo: req.body.motivo ,
      codemi: req.body.codemi ,
      emision1: req.body.emision1 ,
      emision2: req.body.emision2 ,
      emision3: req.body.emision3 ,
      codtipo3: req.body.codtipo3 ,
      numdoc3: req.body.numdoc3 ,
      fecdoc3: req.body.fecdoc3 ,
      fecvcto: req.body.fecvcto ,
      tiponc: req.body.tiponc ,
      tipond: req.body.tipond,
      noperacion: req.body.noperacion ,
      incluncnd: req.body.incluncnd ,
      enviosunat: req.body.enviosunat ,
      sunat: req.body.sunat ,
      revisadook: req.body.revisadook ,
      ncok: req.body.ncok ,
      ndok: req.body.ndok ,
      ncndok: req.body.ncndok ,
      asocdocu: req.body.asocdocu ,
      pedidoord: req.body.pedidoord ,
      flagapp: req.body.flagapp ,
      created_at: null ,
      idseller: req.body.idseller ,
      idcustomer: req.body.idcustomer,
      imei: req.body.imei ,
      latitude: req.body.latitude ,
      longitude: req.body.longitude ,
      entrega: req.body.entrega ,
      monentrega: req.body.monentrega ,
      monefectivo: req.body.monefectivo ,
      control_id: req.body.control_id ,
      latituderep: req.body.latituderep ,
      longituderep: req.body.longituderep ,
      recep_ok: req.body.recep_ok ,
      entrega_fecha: req.body.entrega_fecha ,
      downnube: req.body.downnube 
    };

    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    UserModel.updateVenta1(userData, function (err, data) {
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


  app.delete('/api/ventas1/:id', (req, res) => {
    var id = req.params.id;
    UserModel.deleteVenta1 (id, (err, data) =>  {
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

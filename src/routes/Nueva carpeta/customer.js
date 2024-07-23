/*
Creating OAuth Authorization... done
Client:      <none>
ID:          d0e0fb2b-4c45-443f-be18-8d3069b00951
Description: Long-lived user authorization
Scope:       global
Token:       021a10a3-9cd4-46ed-ac09-cef9a3285027
Updated at:  Sat Jan 22 2022 20:23:57 GMT-0500 (GMT-05:00) (less than a minute ago)
*/ 

const MSG_ERROR= "error";
const MSG_SUCCESS= "success";
const secretKey = '021a10a3-9cd4-46ed-ac09-cef9a3285027';
const jwt = require('jsonwebtoken');

const UserModel = require('../models/customers');

module.exports = app => {

  app.get('/api/customers',  (req, res) => {
   
    const userData = {
      controlid: req.query.controlId,
      codven: req.query.codVen,
    };   
    console.log('Customers');
    console.log (req.query.controlId);
    console.log (req.query.codVen);
   
    req.setTimeout(10000); // Set request timeout to 5 seconds
    res.setTimeout(10000); // Set response timeout to 5 seconds

    UserModel.getCustomerControlId(userData, (err, data) => {
      res.status(200).json(data);
    });
  });
  
  app.get('/api/customers/:id', async(req, res) => {
    const userData = {
      id: req.params.id,
    };    
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
   
    await UserModel.getCustomerId( userData, function (err, data)  {
      res.status(200).json(data);
    });

  });


  app.get('/api/customers/range', (req, res) => {
    const userData = {
      controlIdFrom: req.body.controlIdFrom,
      controlIdTo: req.body.controlIdTo,
      codVen: req.body.codVen,
    };  
    console.log('Customers Range');
    console.log(req.body.controlIdFrom);
    console.log(req.body.controlIdTo);
    console.log(req.body.codVen);
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds

    UserModel.getCustomerRange( userData, function (err, data)  {
      res.status(200).json(data);
    });

  });

  app.get('/api/customers/emve/:clave', async (req, res) => {
    const userData = {
      codempresa: req.params.clave.substr(0,3),
      codven : req.params.clave.substr(3,4),
    };    
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds

    await UserModel.getCustomerCodven( userData, function (err, data)  {
        res.status(200).json(data);
    });
  
  });

  app.get('/api/customers/emco/:clave', (req, res) => {
    const userData = {
      codempresa: req.params.clave.substr(0,3),
      codcli : req.params.clave.substr(3,8),
    };    
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds

    UserModel.getCustomerEmpCod( userData, function (err, data)  {
        res.status(200).json(data);
    });
  
  });

  app.get('/api/customers/existe/:clave',  (req, res) => {
    const userData = {
      codempresa: req.params.clave.substr(0,3),
      codcli : req.params.clave.substr(3,8),
    };    
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds
    UserModel.getCustomerExiste( userData, function (err, data)  {
        res.status(200).json(data);
    });
  });

  app.post('/api/customers',  (req, res ) => {
        //let userData1= new Array;
        //userData1[0] = req.body[0]; 
         var userData= {
          id: req.body.id ,   
          control_id: req.body.control_id,
          codempresa: req.body.codempresa ,
          fecing: req.body.fecing ,
          codcli: req.body.codcli ,
          nombre: req.body.nombre ,
          responsa: req.body.responsa ,
          nomcli: req.body.nomcli ,
          apepat: req.body.apepat ,
          apemat: req.body.apemat ,
          fecnac: req.body.fecnac ,
          codentidad: req.body.codentidad ,
          ndocumento: req.body.ndocumento ,
          dni: req.body.dni ,
          ruc: req.body.ruc ,
          pasaporte: req.body.pasaporte ,
          carnet: req.body.carnet ,
          cedula: req.body.cedula ,
          dircli: req.body.dircli ,
          dis: req.body.dis ,
          ubicli: req.body.ubicli ,
          ubigeocompleto: req.body.ubigeocompleto ,
          tele01: req.body.tele01 ,
          tele02: req.body.tele02 ,
          celular: req.body.celular ,
          email: req.body.email ,
          codven: req.body.codven ,
          fecuc: req.body.fecuc ,
          fecup: req.body.fecup ,
          credito: req.body.credito ,
          obs1: req.body.obs1 ,
          obs2: req.body.obs2 ,
          caution: req.body.caution ,
          clase: req.body.clase ,
          rucle: req.body.rucle ,
          activo: req.body.activo ,
          zona: req.body.zona ,
          zonaaux: req.body.zonaaux ,
          semaforo: req.body.semaforo ,
          fecinivig: req.body.fecinivig ,
          fecfinvig: req.body.fecfinvig ,
          created_at:  req.body.created_at ,
          updated_at:  req.body.updated_at ,
          actualizado_at: req.body.actualizado_at  ,
          fmod: req.body.fecfinvig,
          codmercado: req.body.codmercado,
          flagapp: req.body.flagapp
        };

        req.setTimeout(5000); // Set request timeout to 5 seconds
        res.setTimeout(5000); // Set response timeout to 5 seconds
    
        UserModel.insertCustomer(userData , (err, data) => {
          
              if (data && data.insertId) {
                    res.status(200).json({
                        success: true,
                        msg: "Inserted a new customers",
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

  app.put('/api/customers/:id', (req, res) => {
    var userData = {
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
      codentidad: req.body.codentidad ,
      ndocumento: req.body.ndocumento ,
      dni: req.body.dni ,
      ruc: req.body.ruc ,
      pasaporte: req.body.pasaporte ,
      carnet: req.body.carnet ,
      cedula: req.body.cedula ,
      dircli: req.body.dircli ,
      dis: req.body.dis ,
      ubicli: req.body.ubicli ,
      ubigeocompleto: req.body.ubigeocompleto ,
      tele01: req.body.tele01 ,
      tele02: req.body.tele02 ,
      celular: req.body.celular ,
      email: req.body.email ,
      codven: req.body.codven ,
      fecuc: req.body.fecuc ,
      fecup: req.body.fecup ,
      credito: req.body.credito ,
      obs1: req.body.obs1 ,
      obs2: req.body.obs2 ,
      caution: req.body.caution ,
      clase: req.body.clase ,
      rucle: req.body.rucle ,
      activo: req.body.activo ,
      zona: req.body.zona ,
      zonaaux: req.body.zonaaux ,
      semaforo: req.body.semaforo ,
      fecinivig: req.body.fecinivig ,
      fecfinvig: req.body.fecfinvig ,
      fmod: req.body.fecfinvig,
      codmercado: req.body.codmercado,
      flagapp: req.body.flagapp
    };
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds

    UserModel.updateCustomer(userData, function (err, data) {
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

  app.put('/api/customers/emco/:clave', (req, res) => {
    var userData = {
      id: req.params.id,
      codempresa: req.params.clave.substr(0,3) ,
      fecing: req.body.fecing ,
      codcli: req.params.clave.substr(3,8) ,
      nombre: req.body.nombre ,
      responsa: req.body.responsa ,
      nomcli: req.body.nomcli ,
      apepat: req.body.apepat ,
      apemat: req.body.apemat ,
      fecnac: req.body.fecnac ,

      
      codentidad: req.body.codentidad ,
      ndocumento: req.body.ndocumento ,
      dni: req.body.dni ,
      ruc: req.body.ruc ,
      pasaporte: req.body.pasaporte ,
      carnet: req.body.carnet ,
      cedula: req.body.cedula ,
      dircli: req.body.dircli ,
      dis: req.body.dis ,
      ubicli: req.body.ubicli ,
      ubigeocompleto: req.body.ubigeocompleto ,
      tele01: req.body.tele01 ,
      tele02: req.body.tele02 ,
      celular: req.body.celular ,
      email: req.body.email ,
      codven: req.body.codven ,
      fecuc: req.body.fecuc ,
      fecup: req.body.fecup ,
      credito: req.body.credito ,
      obs1: req.body.obs1 ,
      obs2: req.body.obs2 ,
      caution: req.body.caution ,
      clase: req.body.clase ,
      rucle: req.body.rucle ,
      activo: req.body.activo ,
      zona: req.body.zona ,
      zonaaux: req.body.zonaaux ,
      semaforo: req.body.semaforo ,
      fecinivig: req.body.fecinivig ,
      fecfinvig: req.body.fecfinvig ,
      fmod: req.body.fecfinvig,
      codmercado: req.body.codmercado,
      flagapp: req.body.flagapp
    };
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds

    UserModel.updateCustomerCodcli(userData, function (err, data) {
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


  app.delete('/api/customers/:id', (req, res) => {
    var id = req.params.id;
    req.setTimeout(5000); // Set request timeout to 5 seconds
    res.setTimeout(5000); // Set response timeout to 5 seconds

    UserModel.deleteCustomer(id, (err, data) =>  {
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


function validateRegFormRegister(req, res, next){
  console.log('Validating form...');
  if(!req.body.NOMBRE){
      //return res.send(500, 'Need a name param');
      return res.json(500,{msg:getError('Need a Nombre param')});
  };
  if(!req.body.APEPAT){
    //return res.send(500, 'Need a description param');
    return res.json(500,{msg:getError('Need a Apellido Paterno  param')});
  };

  if(!req.body.APEMAT){
    //return res.send(500, 'Need a path param');
    return res.json(500,{msg:getError('Need a  Apellido Materno param')});
  };

  if(!req.body.CODCLI){
    //return res.send(500, 'Need a path param');
    return res.json(500,{msg:getError('Need a Codigo  param')});
  };
  next();
};


function getError(error){
  return MSG_ERROR+" "+error;
}


function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader ; //&& authHeader.split(' ')[1];
  //const token = req.headers.authorization;

  console.log ( 'token ' + authHeader ) ;
  //console.log ( 'token ' + authHeader.split(' ')[1] ) ;

  if (!token) {
    return res.status(401).json({ message: 'Token not provider' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid Token' });
    }
    req.user = decoded;
    console.log ( 'decoded ' + req.user ) ;    
    next();
  });
}

//Importar mysql
import mysql from 'mysql'

//crea la conexion
const connection = mysql.createConnection({
    host:'51.81.109.115',
    user: 'gruporom_dbnegocio',
    password: '7(?j=Xej;eV%',
    database: 'gruporom_dbnegocio',
    debug: false,
    multipleStatements: true    
  })

  const conectar = () =>{
    connection.connect( err=>{
        if (err) throw err
        console.log('conectado')
    })
  }
  

  export {conectar}
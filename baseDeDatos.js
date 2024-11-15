const mysql = require('mysql2')


const connection = mysql.connect({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "gastos_comunes"
});

connection.connect((err)=>{
    if(err){
        console.log("error al conectar",err);
        return;
    }
    console.log("conectado a la base de datos");
});

module.exports = connection;
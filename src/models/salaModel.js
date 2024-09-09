const db = require("./db");

/*function listarSalas(){
    return [
        {
            "_id":{
                "$oid": "123456"
            },
            "nome": "Guerreiros do Java",
            "tipo": "Pública"
        }
    ]
}*/


//Código de conexão com o banco:

let listarSalas = async () =>{
    let salas = await db.findAll("salas");
    return salas;
};

module.exports = {listarSalas};
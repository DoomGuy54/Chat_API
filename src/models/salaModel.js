const db = require("./db");

let listarSalas = async () =>{
    let salas = await db.findAll("salas");
    return salas;
};

function listarSalas(){

    return [{nome:"só tem gênio"}, {nome:"Vingadores do Java"}];
}

module.exports = {listarSalas};
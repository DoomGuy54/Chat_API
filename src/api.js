const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const router = express.Router();

app.use('/', router.get('/',(req, res)=>{
    res.status(200).send("<h1>API-CHAT</h1>")
}));

app.use('/sobre', router.get('/sobre', (req, res, next)=>{
    res.status(200).send({
       "nome":"API-CHAT",
       "versao":"0.1.0",
       "autor": "Ryan Koch"
    })
}));

app.use('/', router.get('/salas',(req,res)=>{
    const salaController = require("./controllers/salaController");
    const resp = salaController.get();
    res.status(200).send(resp);
}));

module.exports = app;
const salaModel = require('../models/salaModel');

exports.get = async()=>{
    const salaModel = require('../models/salaModel');
    return await salaModel.listarSalas();
}

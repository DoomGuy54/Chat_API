const { MongoClient, Collection } = require("mongodb");

let singleton;

async function connect() {
    if(singleton) return singleton;

    const client = new MongoClient("mongodb+srv://ryank:zHySU1Vic2rxiCNZ@cluster0.mqy61.mongodb.net/");
    await client.connect();

    singleton = client.db(process.env.DB);
    return singleton;
}

let findAll = async (collection) =>{
    const db = await connect();
    return await db.collection(collection).find().toArray();
}

module.exports = { findAll }
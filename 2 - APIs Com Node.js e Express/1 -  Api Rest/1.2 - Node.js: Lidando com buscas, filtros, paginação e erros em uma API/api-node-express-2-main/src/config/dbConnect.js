import mongoose from "mongoose";

mongoose.connect(process.env.STING_DB_CONECTION);

let db = mongoose.connection;

export default db;
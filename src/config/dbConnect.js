import mongoose from "mongoose";

mongoose.connect("mongodb+srv://<SEU USUARIO>:<SUA SENHA>@instapi.jjq4s.mongodb.net/NODE")

let db = mongoose.connection

export default db;


import 'dotenv/config';
import express from "express";
import cors from "cors";
import  dbConnect  from './config/mongo';
const app = express();
const PORT= process.env.PORT || 3001
app.use(cors());





app.listen(PORT, ()=>{
    dbConnect();
    console.log("server on port" , `http://localhost:${PORT}`);

});

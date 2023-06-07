import "dotenv/config"
import {connect} from "mongoose";


async function dbConnect(): Promise<void> {
    const DB_URI= <string>process.env.DB_URI || '';
    console.log(DB_URI)
    connect(DB_URI)
    .then(() => {
      console.log('Successfully connected to the database');
    })
    .catch((error) => {
      console.error('Error connecting to the database:', error);
    });
  }
  
  export default dbConnect;
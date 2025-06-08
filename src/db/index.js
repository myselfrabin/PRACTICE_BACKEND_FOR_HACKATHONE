import mongoose from 'mongoose'; 
import {DB_NAME} from '../constants.js';



const connectDB =  async () => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MongoDB connected ! DB host : ${connectionInstance.connection.host}`)

    } catch (error) {
        console.log("MongoDB connection error" , error);
        process.exit(1) // i will exit the process here because databse didnot connected here i don't want to proceed it further

    }
}

export default connectDB;
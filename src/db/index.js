 import mongoose from 'mongoose'
 import { DB_NAME } from '../constants.js   '


 const connectDB=async()=>{
    try {
    const connectioninstance=await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    console.log(connectioninstance)
    console.log(`\n MongoDb connected !! DB Host: ${connectioninstance.connection.host}`)
        
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR",error);
        process.exit(1)
    }
 } 


 export default connectDB

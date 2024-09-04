import mongoose from "mongoose";

export default async function connectMongo() {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            dbName: "organic-store",
          });
        console.log("Connected");
        return connect;
    } catch(err){
        console.log(err);
    }
}
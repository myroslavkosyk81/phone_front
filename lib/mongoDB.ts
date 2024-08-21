import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectDb = async (): Promise<void> => {
   mongoose.set('strictQuery', true)
   if (isConnected) {
      console.log('mongoDB is already connected');
      return;
   }
   try {
      await mongoose.connect(process.env.MONGODB_URL || "", {
         dbName: "Phone_userStore"
      })
      isConnected = true;
      console.log("mongoDB connected")
   } catch (error) {
      console.log(error)
   }
}
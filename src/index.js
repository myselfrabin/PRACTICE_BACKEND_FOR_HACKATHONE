//import 'dotenv/config'
import dotenv from "dotenv";
import connectDB from "./db/index.js"
import { app } from './app.js'



dotenv.config({ path: './.env' });

const PORT = process.env.PORT

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
  });

  // .then() if there is success and .catch() if there is failure


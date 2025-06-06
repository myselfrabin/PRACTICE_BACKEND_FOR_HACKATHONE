import express from "express"; 
import cors from "cors";
const app = express();

app.use(
    cors({
        "origin" : process.env.CORS_ORIGIN,
        credentials : true
    })
)
//common middleware, just securing app as much as possible
app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended : true, limit: "16kb"}))
app.use(express.urlencoded("public"))

// export this express() app so that we can use it in the somewhere 

export { app }; 
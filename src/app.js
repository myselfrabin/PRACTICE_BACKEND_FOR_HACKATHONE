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


// import routes
import  healthcheckRouter from "./routes/healthcheck.routes.js" 
import  userinfoRouter from "./routes/userinfo.routes.js" 


//routes
app.use("/api/v1/healthcheck", healthcheckRouter)
app.use("/api/v2/userinfo", userinfoRouter )

// export this express() app so that we can use it in the somewhere 

export { app }; 
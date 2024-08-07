const express = require("express")
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")

const cookieParser = require("cookie-parser")
const bodyParser=require("body-parser")
const errorMiddleware = require("./middleware/error")
const path = require("path");

dotenv.config({path:"backend/config/config.env"})
// databaseConnection()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));

const user = require("./route/userRoute")

app.use("/api/v1",user)


//-------global error handle middleware---------
// app.use((error,req,res,next)=>{
//     error.statusCode=error.statusCode || 500
//     res.status(error.statusCode).json({
//         status:error.statusCode,
//         message:error.message
//     })
// })
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

app.use(errorMiddleware)

module.exports = app
const app = require("./app")
const connectedDatabase = require("./config/databaseConnection.js")




connectedDatabase()

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`)
})
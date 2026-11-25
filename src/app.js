const express = require("express");

const app = express();

app.get("/user", (req, res)=>{
    res.send({firstName:"Vinod", lastName:"Kumar"})
})

app.post("/user", (req,res)=>{
    //saving data to the DB
    res.send("Data successfully saved to the data base")
})

app.delete("/user", (req,res)=>{
    res.send("Deleted successfully")
})

app.use("/test", (req, res)=>{
    res.send("Hello from the server")
})

app.listen(3000, ()=>{
    console.log("Server is successfully listening on PORT 3000....")
})
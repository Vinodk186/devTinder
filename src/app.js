const express = require("express");

const app = express();

app.use("/", (req, res)=>{
    res.send("Dev tinder dashboard in started")
})

app.use("/hello", (req, res)=>{
    res.send("Hello hello hello hello hellllloooo......")
})

app.use("/test", (req, res)=>{
    res.send("Hello from the server")
})

app.listen(3000, ()=>{
    console.log("Server is successfully listening on PORT 3000....")
})
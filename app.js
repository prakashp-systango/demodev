const express = require("express")
const app = express()

app.get("/user",(req,res) => {
    res.json({
        name:"prakash Patel",
        age:24,
        status: "looking for job"
    })
})

app.listen(3000,()=>{
    console.log("server is running")
})
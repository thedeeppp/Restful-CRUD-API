const express= require('express')
const app= express()

//Route 

app.get('/',(req, res)=>{
   res.end("App is running") 
} )

app.listen(3000, ()=>{
    console.log("Node API is running on port 3000")
})
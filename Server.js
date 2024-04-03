//requiring express framework 
const express =  require('express')
const { hostname } = require('os')
const app  = express()
PORT=8000

//middlewares

app.use(express.static('views'))
app.use(express.json())
app.set('view engine', 'ejs');

//API's
app.get('/',(req,res)=>{
    res.render("pages/main")
})



//listening port 
app.listen(PORT, hostname , ()=>{
    console.log(`Server running at http:localhost:${PORT}`)
})

const express = require('express')
const app = express()
var path = require('path')
const port = 3000
app.use(express.static(path.join(__dirname, 'public')));

const date = new Date();
app.use((req,res,next)=> {
  if (
    date.getHours() > 9 &&
    date.getHours() < 17 &&
    date.getDay() > 0 &&
    date.getDay() < 6
  ) {
    next();
  }else {
    res.send('<h1>Sorry .. This web application is only available during Monday to Friday, from 9 to 17</h1>')
  }  
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/homepage.html')
})
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/contantus.html')
})
app.get('/services',(req,res)=>{
    res.sendFile(__dirname+'/ourservices.html')
})

app.listen(port, () => console.log(`server app listening on port ${port}!`))
const express = require('express')
const app = express();

const reqFilter = (req,res,next) =>{
    if(!req.query.age){
        res.send("plese provid age")
    }
    else if(req.query.age<18){
        res.send("you can not access this page")
    }
    else{
        next();
    }

}
// app.use(reqFilter)

//..............................

app.get('/',(req,res) =>{
    res.send('welcome to home page')
})


app.get('/users',reqFilter,(req,res) =>{
    res.send('welcome to users page')
})

app.get('/about',(req,res) =>{
    res.send('welcome to about page')
})

app.listen(8000)
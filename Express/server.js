const express = require('express');

const app= express();

app.get('/',(req,res)=>{
    res.send("This is Home page !");
});

app.get('/contact',(req,res)=>{
    res.send('Hellooo! This is My Email ahtshamshami7117@gmail.com');
});

app.get('/about',(req,res)=>{
    res.send("My Name is Ahtsham Aslam <br> And i am learning Web development ")
})

app.get('/skills',(req, res)=>{
    res.send("HTML CSS JS and now on Node further React.js")
})
app.get('/hobbie',(req,res)=>{
    res.send("Codding Reading ")
})



app.listen(3000,()=>{
    console.log('server has started on port 300');
});
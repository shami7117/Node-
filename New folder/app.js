const express= require('express');
const bodyParser=require('body-parser');
const ejs=require('ejs');

var arr=[];

const app=express();
app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');


app.get('/',function(req,res){
    res.render("info",{parag:arr})
});

app.post('/',function(req,res){
    var paragraph=req.body.para;

    arr.push(paragraph);
    arr.join('<br>');
    res.redirect('/');

})



app.listen(3000,function(req,res){
    console.log('Server is runing');
});
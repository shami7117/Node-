const express= require('express');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

var forms=["Buy Food","Cook Food","Eat Food"];
app.set('view engine','ejs');

app.get('/',function(req,res){
    
    var today=new Date();
    
    var option={
        weekday:"long",
        day:"numeric",
        month:"long"
    };

    var currentDay=today.toLocaleDateString("en-UN",option);

    res.render("list",{kindOfDay:currentDay,form_Data:forms});
});


app.post('/',function(req,res){
    var  form=req.body.item;  
    forms.push(form);
    res.redirect('/')
});

app.listen(3090,function(){
    console.log('Server is runing');
});
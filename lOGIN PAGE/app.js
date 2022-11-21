const express=require('express');
const request=require('request');
const bodyParser=require('body-parser');
const https=require('https');

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/",function (req,res) {
    res.sendFile(__dirname + '/INDEX.html');
})

app.post("/",function(req,res){

    const firstName=req.body.Firstname;
    const lname =req.body.Lastname;
    const email =req.body.email;
const object={
        member:[
            {
                email_address: email,
                status:"Subscribed",
                merge_fields:{
                    FNAME:firstName,
                    LNAME:lname

                }

            }
        ]
    };

    const jsonData=JSON.stringify(object);

    const url= 'https://us8.api.mailchimp.com/3.0/lists/75a94958b6';

    const option={
        method:"POST",
        auth:"shami:7e91468c7827b836b3044ed9a9595378-us8"
    };

    const request=https.request(url,option,function(response){
        response.on("data",function(data){
            console.log(JSON.parse(data));
        })
    })
    request.write(jsonData);
request.end();
});



app.listen(8070,function(){
    console.log('Server is running on port 3000');
})
// API keys
// 7e91468c7827b836b3044ed9a9595378-us8

// listid
// 75a94958b6
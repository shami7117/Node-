const express= require('express');
const https= require('https');
const bodyparser=require('body-parser');
const app= express();
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + '/inde.html');
});

app.post('/',function(req,res){
    

    const City=req.body.cityname;

        https.get('https://api.openweathermap.org/data/2.5/weather?q='+ City +'&appid=06600ff05cfd21df25056443ba1ead00&units=metric',function(response){
        console.log(response.statusCode);

    response.on('data',function(data){
        var a = JSON.parse(data);
        var weatherData=a.main.temp;
        var description= a.weather[0].description;
        var icon=a.weather[0].icon;
        var image=" http://openweathermap.org/img/wn/"+icon+ "@2x.png";
    res.write("<h1>The temprature in "+City +" is " + weatherData +" Degree Celcius </h1>") ;
    res.write("<p>The Weather in "+ City);
    res.write( "<img src="+image+">");

    res.send();
});


});
})







app.listen(3050,function(){
    console.log("Runing");
})
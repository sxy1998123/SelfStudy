var app = require('express')();

app.get('/',(req,res)=>{
    var filepath = __dirname + '/ajax与后台交互.html';
    res.sendFile( filepath );
     console.log(req.baseUrl);
});
app.get('/jquery.min.js',(req,res)=>{
    res.sendFile(__dirname + '/jquery.min.js');
});
app.get('/jquery-1.12.4.js',(req,res)=>{
    res.sendFile(__dirname + '/jquery-1.12.4.js');
});

app.post('/datas',(req,res)=>{
    console.log(req.body);
})

app.listen('8080',function(){
    console.log('port 8080 start');
})
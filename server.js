//一个页面入口（服务端
var app = require('express')()//链式语法
var http = require('http').Server(app)
var io = require('socket.io')(http);

//2。express 路由
app.get('/',(req, res)=>{
res.sendFile(__dirname+'/test2.html');
});

function suiji() {
    var c = Math.random() * 100;
    var d;
    if (c < 50) {
        d = 0; //表示丢失
    } else {
        d = 1; //表示没有丢失
    }
    return d;
}

io.on('connection', function(socket){
console.log('a user connected');
socket.on('disconnect', function(){
console.log('user disconnected');
});

socket.on('message', function(msg){
    if(msg[0]==1){       //表示报文没有差错
        var arr2 = [];
        arr2.push(suiji());
        arr2.push(msg[1]);
        console.log(`发送过来的值:${msg}`);
        var changemsg = arr2;
        console.log(`发回客户端的值:${changemsg}`);
        if(changemsg[0]==1){
            socket.emit("chat message", changemsg);
        }
    }
    else{
        console.log("报文有差错");
    }
    
    

});
});

//1.创建一个监听端口,开启服务器

http.listen(3000, ()=>{
console.log('listening 3000')
})
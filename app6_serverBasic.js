var http = require('http');

var server = http.createServer(function (rew, res){

    res.end('Server Works!!!');
});
//這邊是localhost:3000/tasks 代表這是另外一個路徑

server.listen(3000, 'localhost', function() {


    console.log('Server started on port : 3000');


});

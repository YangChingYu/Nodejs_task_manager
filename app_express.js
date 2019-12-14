var express = require('express');
//This is the third party library

var app = express();

app.get('/', function (req, res){
    res.send('<h1>Express work</h1>')
})

app.get('/tasks', function (req, res) {
    res.send('<h1>Tasks Work.</h1>')
})
//

app.listen(3000, function(){
    console.log('Server listening to port 3000.')
})
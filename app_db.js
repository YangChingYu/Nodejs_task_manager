var express = require('express');
//This is the third party library
var http = require('http');
var fs = require('fs')
//read file

var app = express();
var server = http.createServer(app);
app.get('/', function (req, res){
    res.send('<h1>Express work</h1>')
})

app.get('/tasks', function (req, res) {
    fs.readFile('./db.json', function (err, data) {
        var tasks = JSON.parse(data.toString()).tasks;

        res.json(tasks);
    })
})


app.listen(3000, function(){
    console.log('Server listening to port 3000.')
})
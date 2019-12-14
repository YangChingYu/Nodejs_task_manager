var fs = require('fs')

fs.writeFile('./hello.txt', "How are you?", function(error){

if (!error){

    fs.readFile('./hello.txt', function(error,data){
        if (!error) {
            console.log(data.toString());
        }
    });



}




});

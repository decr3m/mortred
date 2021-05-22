var http = require("http");

//create a server object:
http.createServer(function (req, res) {
    console.log(">>mortred/testsvr::", "hello"); //TRACE
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
}).listen(3006); //the server object listens on port 8080

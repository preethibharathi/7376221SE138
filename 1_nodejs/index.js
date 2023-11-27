var http = require("http");

http.createServer(function(request,response){

response.writeHead(200, {'Content-Type':'text/plain'});

//Send the response text as "Hello World-7376221SE138-Preethi Bharathi"
response.end('Hello World-7376221SE138-Preethi Bharathi\n');
}).listen(3100);

console.log('Server running at http://127.0.0.1:3100/')
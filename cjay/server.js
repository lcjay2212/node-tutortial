var http = require('http');

function onRequest(request, response) {
    console.log("A user made a request" + request.url);

}

http.createServer(onRequest).listen(8888);
console.log("Server is now running.....");
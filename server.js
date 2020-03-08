var http = require('http');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Matunthu.Box');
    response.write('An online platform for medicines');
    response.end();
}

http.createServer(onRequest).listen(8000);
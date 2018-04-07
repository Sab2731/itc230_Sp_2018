var http = require("http");  
http.createServer(function(req,res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Aloha the whole World');
}).listen(process.env.PORT || 3000);
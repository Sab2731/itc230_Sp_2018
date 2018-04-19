var http = require("http"); 
http.createServer(function(req,res) {
  var path = req.url.toLowerCase();
  
  
  switch(path) {
    
    case '/':
    case '/index':
    case '/index.html': 
      var fs = require("fs");
      fs.readFile('index.html', function (err, data) {
     if (err) return console.error(err);
     console.log(data.toString());
     res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
      });
      break;
      
    case '/about':
    case '/about.html':
       var fs = require("fs");
      fs.readFile('about.html', function (err, data) {
     if (err) return console.error(err);
     console.log(data.toString());
     res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
      });
      break;
      
    default:
      var fs = require("fs");
      fs.readFile('pagenotfound.html', function (err, data) {
     if (err) return console.error(err);
     console.log(data.toString());
     res.writeHead(404, {'Content-Type': 'text/html'});
      res.end(data);
      });
      break;
    }
}).listen(process.env.PORT || 3000);

const http = require("http");
const fs = require("fs");
const albums = require("./albums");

function serveStatic(res, path, contentType, responseCode) {
  if(!responseCode) responseCode = 200;
  console.log(__dirname + path)
  fs.readFile(__dirname + path, function(err, data) {
      if(err) {
        res.writeHead(500, {'Content-Type': 'text/plain'} );
        res.end('Internal Server Error');
      }
      else{
        res.writeHead(responseCode, {'Content-Type': contentType} );
        res.end(data);
      }
  });
}

http.createServer((req,res) => {
  console.log("Create server");    
  const path = req.url.toLowerCase();
  switch(path) {
    case '/':
      fs.readFile("public/home.html", (err, data) => {
        if (err) return console.error(err);
        res.writeHead(200, {'Content-Type': 'text/html'} );
        res.end(data.toString());
      });
      break;
    case '/about':
      fs.readFile("public/about.html", (err, data) => {
        if (err) return console.error(err);
        res.writeHead(200, {'Content-Type': 'text/html'} );
        res.end(data.toString());
      });
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'} );
      res.end('You must have took a wrong turn');
      break;
    }

    console.log(albums.getAll());

}).listen(process.env.PORT || 3000);
console.log("Server created");
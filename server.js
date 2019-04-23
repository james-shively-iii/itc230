const http = require('http');
const fs = require('fs');
const qs = require('querystring')
const albums = require('./albums');

http.createServer((req,res) => {
  console.log("Create server");
  let url = req.url.split("?"); 
  let query = qs.parse(url[1]); 
  const path = url[0].toLowerCase();   
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
    // Create the 'get' method to return array values
    case '/get':
      let find = albums.get(query.albumTitle);
      res.writeHead(200, {'Content-Type': 'text/plain'});
      let returned = (find) ? JSON.stringify(find) : "Missing data";
      res.end('Returned values: ' + query.albumTitle + "\n" + returned);
      break;
    // Create the 'delete' method to delete array values
    case '/delete':
      let result = albums.delete(query.albumTitle);
      res.writeHead(200, {'Content-Type': 'text/plain'});
      if(result >= 0) {
        res.end(`Deleted: ${result} - ` + query.albumTitle); 
      } else {
        res.end("Item was not found, deletion failed");
      }
      break;
      
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'} );
      res.end('You must have took a wrong turn');
      break;
    }

}).listen(process.env.PORT || 3000);
console.log("Server created");
const http = require('http');
const fs = require('fs');
<<<<<<< HEAD
const albums = require('./albums');
const querystring = require('qs');

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
  console.log('Create server');    
  const path = req.url.toLowerCase();
=======
const qs = require('querystring')
const albums = require('./albums');

http.createServer((req,res) => {
  console.log("Create server");
  let url = req.url.split("?"); 
  let query = qs.parse(url[1]); 
  const path = url[0].toLowerCase();   
>>>>>>> d85501fc8f93a469b9337909353f8c07997c2810
  switch(path) {
    case '/':
      fs.readFile('public/home.html', (err, data) => {
        if (err) return console.error(err);
        res.writeHead(200, {'Content-Type': 'text/html'} );
        res.end(data.toString());
      });
      break;
    case '/about':
      fs.readFile('public/about.html', (err, data) => {
        if (err) return console.error(err);
        res.writeHead(200, {'Content-Type': 'text/html'} );
        res.end(data.toString());
      });
      break;
<<<<<<< HEAD
    case '/get':
      // return info for requested album
      qs.parse();
=======
    // Create the 'get' method to return array values
    case '/get':
      let find = albums.get(query.albumTitle);
      res.writeHead(200, {'Content-Type': 'text/plain'});
      let returned = (find) ? JSON.stringify(find) : "Missing data";
      res.end('Returned values: ' + query.albumTitle + "\n" + returned);
      break;
    // Create the 'delete' method to delete array values
    case '/delete':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('delete');
      break;
      
>>>>>>> d85501fc8f93a469b9337909353f8c07997c2810
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'} );
      res.end('You must have took a wrong turn');
      break;
    }

}).listen(process.env.PORT || 3000);
console.log('Server created');
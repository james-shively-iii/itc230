const http = require("http");
  http.createServer((req,res) => {
    console.log("Create server");
    const path = req.url.toLowerCase();
      switch(path) {
        case '/':
        const fs = require("fs");
        fs.readFile("public/home.html", (err, data) =>{
          if (err) return console.error(err);
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(data.toString());
        });
          break;
        case '/about':
        //const fs = require("fs");
        fs.readFile("public/about.html", (err, data) =>{
          if (err) return console.error(err);
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(data.toString());
        });
          break;
        default:
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.end('Not found');
          break;
        }
  }).listen(process.env.PORT || 3000);
    console.log("Server created");

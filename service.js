import express from 'express';
import favicon from 'serve-favicon';
import path from 'path';
import data from './data/data.json';

const helmet = require('helmet');
const app = express();
const PORT = 3000;

app.use(helmet());

// routing to static files within specific directories
app.use(express.static('public'));
app.use('/images', express.static('images'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// method to use JSON
//app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// This is for proxies
app.set('trust proxy', 'loopback');

// GET METHODS
app.get('/', (req,res) => {
  // get data first
  res.json(data)
});

// JSON data
// { "hello": "JSON is cool"}
// URLEncoded data
// hello=URLEncoded+is+cool

app.post('/newItem', (req,res) => {
  console.log(req.body)
  res.send(req.body)
});


app.get('/item/:id', (req,res,next) => {

  // everything below this is middleware
  // this is the middleware that pulls the data
  console.log(req.params.id)
  let user = Number(req.params.id)
  console.log(user) 
  console.log(data[user])
  // middleware that uses the req object
  console.log(`Request from: ${req.originalUrl}`)
  console.log(`Request type: ${req.method}`)
  // everything above this is middleware
 
  res.send(data[user])
  next()
}, (req,res) => console.log('Did you get the right data?'));

 //-----------------------------------------------------------\\
// METHOD EXAMPLES FOR ROUTING - COMMON METHODS            \\
app.get('/images', (req,res) => {
  res.download('images/istockrocket.jpg')
  //res.redirect('http://www.linkedin.com')
  //res.end()
  //res.send(`a put request with /item route on port ${PORT}`)
});
//------------------METHOD EXAMPLES ENDED-------------------\\

 //-----------------------------------------------------------\\
// METHOD EXAMPLES FOR ROUTING - CHAINING                      \\
app.route('/item')
  .get((req,res) => {
    throw new Error();
    //res.download('images/istockrocket.jpg')
    //res.redirect('http://www.linkedin.com')
    //res.end()
    //res.send(`a get request with /item route on port ${PORT}`)
  })
  .put((req,res) => 
    res.send(`a put request with /newItem route on port ${PORT}`)
  )
  .delete((req,res) => 
    res.send(`a delete request with /item route on port ${PORT}`)
);
//------------------METHOD EXAMPLES ENDED-------------------\\

// Error handling function
app.use((err,req,res,next) => {
  console.error(err.stack)
  res.status(500).send(`Red alert! Red alert!: ${err.stack}`)
});

// LISTEN TO THE PORT THAT WAS CREATED
app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`)
});



///////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//                                                       \\
//                   ORIGINAL CODE                       \\
//                                                       \\     
/* const http = require('http');
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

}).listen(process.env.PORT || PORT);
console.log("Server created"); */
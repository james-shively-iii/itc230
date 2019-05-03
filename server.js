import express from 'express';
import path from 'path';

'use strict'
//      CONSTANTS AND VARIABLES         \\
const helm = require('helmet');                 // helmet for security
const ex = require('express');                  // express frameworks
const bp = require('body-parser');              // body parser for express
const app = ex();                               // placing express into app variable
const P = 3000;                                 // P is for PORT
const albums = require('./albums');             // invoking the album array and methods
const hb = require('express-handlebars');       // express templates

//      INVOKE HANDLEBAR TEMPLATES      \\
app.engine('.html', hb({ extname: '.html' }));
app.set('view engine', '.html');

//      CREATE SERVER                   \\
app.set('port', process.env.P || P);

//      HELMET FOR SECURITY             \\
app.use(helm());

//      STATIC DIRECTORY                \\
app.use(ex.static(__dirname + '/public'));

//      PARSE FORM SUBMISSIONS          \\
app.use(bp.urlencoded({ extended:true }));

//      SENDING STATIC FILES            \\
app.get('/', (req,res) => {
    // respond in plain text
    res.type('text/html')
    // respond with a static file
    res.sendFile(__dirname + '/public/home.html')
});
app.get('/about', (req,res) => {
    // respond in plain text
    res.type('text/html')
    // the response back to the user 
    res.send('About page')
});

//      404 ERROR HANDLER               \\
app.use((req,res) => {
    // respond in plain text
    res.type('text/plain')
    // response data
    res.status(404)
    // send the response back to the user
    res.send('404 ERROR: You took the wrong left turn...now meet your demise!!!')
});

//      QUERY & FORMS                   \\
// app.route('/get')
//     .get((req,res) => {
//         console.log(req.query)
//         res.send('here lies my hopes and dreams')
//     })
//     .post((req,res) => 
//         console.log(req.body)
// );
// app.get('/get', (req,res) => {
//     console.log(req.query)
//     res.send('here lies my hopes and dreams')
// });

//      RENDER METHOD                   \\
// render item deletion 
app.get('/delete', function(req,res){
    // look for the item and grab it
    let result = albums.delete(query.albumTitle); 
    // take that item and delete it
    res.render('delete', {title: req.query.albumTitle, result: result});
});
// render item posting
app.post('/detail', (req,res) => {
    console.log(req.body)
    // rendering query into HTML format
    let header = 'Let\'s look for: ' + req.body.albumTitle + '<br>'
    // look for the item and grab it
    let found = albums.get(req.body.albumTitle)
    // posting that item to the rendered format
    res.render('details', { albumTitle: req.body.albumTitle, result: found})
});


app.listen(P, () => {
    console.log(`Server started with Express and created on port ${P}`)
});
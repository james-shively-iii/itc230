import express from 'express';
import path from 'path';

'use strict'
//      CONSTANTS AND VARIABLES         \\
const helm = require('helmet');
const ex = require('express');
const bp = require('body-parser');
const app = ex();
const P = 3000;
const albums = require('./albums');
let hb = require('express-handlebars');
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
    res.type('text/html')
    res.sendFile(__dirname + '/public/home.html')
});
app.get('/about', (req,res) => {
    res.type('text/html')
    res.sendFile(__dirname + '/public/about.html')
});

//      404 ERROR HANDLER               \\
app.use((req,res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 ERROR: You took the wrong left turn...now meet your demise!!!')
});

//      QUERY & FORMS                   \\
// app.route('/get')
//     .get((req,res) => {
//         console.log(req.query)
//         res.send('here lies my hopes')
//     })
//     .post((req,res) => 
//         console.log(req.body)
// );
// app.get('/get', (req,res) => {
//     console.log(req.query)
//     res.send('here lies my hopes')
// });

//      RENDER METHOD                   \\
// send content of 'home' view
app.get('/', (req,res) => {
    res.render('home')
});
app.get('/get', (req,res) => {
    let result = albums.get(req.query.albumTitle)
    res.render('details', { albumTitle: req.query.albumTitle, result: result})
});


app.listen(P, () => {
    console.log(`Server created at port ${P}`)
});
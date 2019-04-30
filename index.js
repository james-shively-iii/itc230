import express from 'express';

'use strict'
const ex = require('express');
const bp = require('body-parser');
const app = express();

app.set('port', process.envPORT || 3000);
app.use(ex.static(__dirname + '/public'));  // set location for static files
app.use(bp.urlencoded({extended: true}));   // parse form submissions

// send static file as response
app.get('/about', (req, res) => {
    res.type('text/html');
    res.send(__dirname + '/public/home.html');
});

// send plain text response
app.get('/about', (req, res) => {
    res.type('text/plain');
    res.send('About page')
});

// define 404 handler
app.use( (req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not found');
});

// create the listen for Express
app.listen(app.get('port'), () => {
    console.log('Express started');
});

app.get('/get', (req, res) => {
    console.log(req.query); // display parsed querystring object
});

app.post('/get', (req, res) => {
    console.log(req.body)   // display parsed form submission
});

// send content of 'home' view
app.get('/', (req, res) => {
    res.render('home');
});

// send content of 'home' view
app.get('/get', (req, res) => {
    let returned = albums.get(req.query.albumTitle);
    res.render('details', {albumTitle: req.query.albumTitle, returned: returned});
});
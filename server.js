const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + '/build/'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'))
});

app.get('/user/register', function(req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'))
});

app.get('/user/login', function(req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'))
});

app.get('/forgotpassword', function(req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'))
});

app.get('/resetpassword', function(req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'))
});

app.get('/user/notifications', function(req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'))
});

app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'))
});

app.get('/feedback', function(req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'))
});

app.get('/underimplementation', function(req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'))
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'))
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('Listening on port' + port +'  ...'));
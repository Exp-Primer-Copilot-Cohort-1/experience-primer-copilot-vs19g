//create web server
var express = require('express');
var app = express();
// create server
var server = require('http').Server(app);
// create socket
var io = require('socket.io')(server);
// create mongoose
var mongoose = require('mongoose');
// create body parser
var bodyParser = require('body-parser');
// create model
var Comment = require('./model/commentModel');

// connect to database
mongoose.connect('mongodb://localhost/meanstack');

// create web server
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// create route
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// create socket
io.on('connection', function(socket) {
    console.log('Co nguoi ket noi');
    // receive data from client
    socket.on('client-send-comment', function(data) {
        // send data to client
        io.sockets.emit('server-send-comment', data);
    });
});

// create route
app.post('/comment', function(req, res) {
    var comment = new Comment({
        name: req.body.name,
        comment: req.body.comment
    });
    comment.save(function(err) {
        if (err) {
            res.json({ kq: 0, errMsg: err });
        } else {
            res.json({ kq: 1, errMsg: '' });
        }
    });
});

// create route
app.get('/comment', function(req, res) {
    Comment.find(function(err, data) {
        if (err) {
            res.json({ kq: 0, errMsg: err });
        } else {
            res.json({ kq: 1, errMsg: '', data: data });
        }
    });
});

// create server
server.listen(3000, function() {
    console.log('Server is running on port 3000');
});
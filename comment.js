//create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Comment = require('./models/comment');
var Post = require('./models/post');
var url = 'mongodb://localhost:27017/comment';
var port = 3000;
//connect to mongodb
mongoose.connect(url);
//use body-parser
app.use(bodyParser.urlencoded({ extended: false }));
//use ejs
app.set('view engine', 'ejs');
//get all comments
app.get('/comment', function(req, res) {
    Comment.find({}, function(err, comments) {
        if (err) throw err;
        res.render('comment', { comments: comments });
    });
});
//get all posts
app.get('/post', function(req, res) {
    Post.find({}, function(err, posts) {
        if (err) throw err;
        res.render('post', { posts: posts });
    });
});
//add comment
app.post('/comment', function(req, res) {
    var comment = new Comment({
        name: req.body.name,
        comment: req.body.comment,
        post_id: req.body.post_id
    });
    comment.save(function(err) {
        if (err) throw err;
        console.log('Comment added');
        res.redirect('/comment');
    });
});
//add post
app.post('/post', function(req, res) {
    var post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    post.save(function(err) {
        if (err) throw err;
        console.log('Post added');
        res.redirect('/post');
    });
});
//delete comment
app.get('/comment/delete/:id', function(req, res) {
    Comment.findByIdAndRemove(req.params.id, function(err) {
        if (err) throw err;
        console.log('Comment deleted');
        res.redirect('/comment');
    });
});
//delete post
app.get('/post/delete/:id', function(req, res) {
    Post.findByIdAndRemove(req.params.id, function(err) {
        if (err) throw err;
        console.log('Post deleted');
        res.redirect('/post');
    });
});
//edit comment
app.get('/comment/edit/:id', function(req, res) {
    Comment.findById(req.params.id, function(err, comment) {
        if (err) throw err;